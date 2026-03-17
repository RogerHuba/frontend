const { Client, GatewayIntentBits, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

// Import our patch notes automation functions
const { parseSimpleFormat, convertToJsonStructure, insertPatchIntoJson } = require('../patch-notes-automation.js');

class PatchNotesBot {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });

    this.patchNotesChannelId = process.env.PATCH_NOTES_CHANNEL_ID;
    this.allowedRoles = process.env.ALLOWED_ROLES?.split(',') || [];
    this.patchNotesPath = path.join(__dirname, '../../src/data/patchNotes.json');

    this.setupEventHandlers();
  }

  setupEventHandlers() {
    this.client.once('ready', () => {
      console.log(`🤖 ${this.client.user.tag} is online and ready!`);
      console.log(`📝 Monitoring channel ID: ${this.patchNotesChannelId}`);
      console.log(`👮 Allowed roles: ${this.allowedRoles.join(', ')}`);
    });

    this.client.on('messageCreate', async (message) => {
      try {
        await this.handleMessage(message);
      } catch (error) {
        console.error('❌ Error handling message:', error);
        await this.sendErrorMessage(message, error.message);
      }
    });
  }

  async handleMessage(message) {
    // Ignore bot messages
    if (message.author.bot) return;

    // Only process messages in the designated channel
    if (message.channel.id !== this.patchNotesChannelId) return;

    // Check if user has permission (role-based or admin)
    if (!this.hasPermission(message.member)) {
      await message.react('❌');
      await message.reply('❌ You don\'t have permission to post patch notes. Required roles: ' + this.allowedRoles.join(', '));
      return;
    }

    const content = message.content.trim();

    // Check for bot commands
    if (content.startsWith('!patch')) {
      await this.handlePatchCommand(message);
      return;
    }

    // Check if message looks like patch notes format
    if (this.isPatchNotesFormat(content)) {
      await this.processPatchNotes(message, content);
    }
  }

  hasPermission(member) {
    if (!member) return false;
    
    // Check if user is admin
    if (member.permissions.has(PermissionFlagsBits.Administrator)) {
      return true;
    }

    // Check if user has any of the allowed roles
    return this.allowedRoles.some(roleName => 
      member.roles.cache.some(role => 
        role.name.toLowerCase() === roleName.toLowerCase()
      )
    );
  }

  isPatchNotesFormat(content) {
    const lines = content.split('\n').filter(line => line.trim());
    
    // Check for version and date
    const hasVersion = lines.some(line => line.toLowerCase().startsWith('version:'));
    const hasDate = lines.some(line => line.toLowerCase().startsWith('date:'));
    
    // Check for area headers and update items
    const hasAreas = lines.some(line => line.endsWith(':') && !line.toLowerCase().includes('version') && !line.toLowerCase().includes('date'));
    const hasUpdates = lines.some(line => 
      line.match(/^[\+\-\*]\s+.+/) || 
      line.startsWith('-D ') ||
      line.match(/^\[(NEW|FIX|BUG|CHANGE|BALANCE|CONTENT)\]/)
    );

    return hasVersion && hasDate && hasAreas && hasUpdates;
  }

  async processPatchNotes(message, content) {
    await message.react('⏳');

    try {
      // Parse the simple format
      const parsedData = parseSimpleFormat(content);
      
      if (!parsedData.version || !parsedData.date) {
        throw new Error('Missing version or date information');
      }

      // Convert to JSON structure
      const newPatch = convertToJsonStructure(parsedData);

      // Read existing patch notes
      let existingData = [];
      try {
        const fileContent = await fs.readFile(this.patchNotesPath, 'utf8');
        existingData = JSON.parse(fileContent);
      } catch (error) {
        console.log('📝 Creating new patch notes file');
      }

      // Insert new patch
      const updatedData = insertPatchIntoJson(newPatch, existingData);

      // Write back to file
      await fs.writeFile(this.patchNotesPath, JSON.stringify(updatedData, null, 2));

      // Send success message
      await message.react('✅');
      await this.sendSuccessEmbed(message, newPatch);

      console.log(`✅ Processed patch ${newPatch.version} from Discord`);

    } catch (error) {
      await message.react('❌');
      throw error;
    }
  }

  async handlePatchCommand(message) {
    const args = message.content.split(' ').slice(1);
    const command = args[0];

    switch (command) {
      case 'help':
        await this.sendHelpEmbed(message);
        break;
      case 'format':
        await this.sendFormatEmbed(message);
        break;
      case 'status':
        await this.sendStatusEmbed(message);
        break;
      default:
        await message.reply('❓ Unknown command. Use `!patch help` for available commands.');
    }
  }

  async sendSuccessEmbed(message, patch) {
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('✅ Patch Notes Updated Successfully!')
      .setDescription(`**${patch.title}** has been added to the website.`)
      .addFields([
        { name: '🏷️ Version', value: patch.version, inline: true },
        { name: '📅 Date', value: patch.date, inline: true },
        { name: '📂 Categories', value: patch.categories.map(c => c.area).join(', ') || 'None', inline: false },
        { name: '📊 Total Updates', value: patch.categories.reduce((sum, c) => sum + c.updates.length, 0).toString(), inline: true }
      ])
      .setTimestamp()
      .setFooter({ text: 'SWG Infinity Patch Notes Bot' });

    await message.reply({ embeds: [embed] });
  }

  async sendErrorMessage(message, error) {
    const embed = new EmbedBuilder()
      .setColor(0xFF0000)
      .setTitle('❌ Error Processing Patch Notes')
      .setDescription(`\`\`\`${error}\`\`\``)
      .addFields([
        { name: '💡 Tips', value: '• Check the format with `!patch format`\n• Make sure you have Version: and Date: lines\n• Use +, -, * symbols for updates\n• End area names with a colon (:)' }
      ])
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }

  async sendHelpEmbed(message) {
    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('🤖 SWG Infinity Patch Notes Bot')
      .setDescription('Automatically converts patch notes to website format.')
      .addFields([
        { name: '📝 Commands', value: '`!patch help` - Show this help\n`!patch format` - Show patch format\n`!patch status` - Bot status' },
        { name: '🚀 Usage', value: 'Simply paste your patch notes in the correct format and I\'ll process them automatically!' },
        { name: '👮 Permissions', value: `Required roles: ${this.allowedRoles.join(', ') || 'Administrator'}` }
      ])
      .setTimestamp()
      .setFooter({ text: 'SWG Infinity Development Team' });

    await message.reply({ embeds: [embed] });
  }

  async sendFormatEmbed(message) {
    const formatExample = `Version: 2.1.0
Date: November 20, 2025

JEDI:
[NEW] **Enhanced lightsaber combat** with improved mechanics
[FIX] Fixed Force Lightning not working in \`combat scenarios\`
[CHANGE] Force Jump range increased from *10m* to **15m**

COMBAT:
+ Legacy format still works (new features)
- Legacy format still works (bug fixes)
* Legacy format still works (changes)

> Advanced Features +>New
-D Rich descriptions with markdown support
[BALANCE] Weapon damage rebalanced for **improved PvP**
[CONTENT] New content including:
  - Energy rifles
  - Plasma weapons`;

    const embed = new EmbedBuilder()
      .setColor(0xFFFF00)
      .setTitle('📋 Patch Notes Format')
      .setDescription('Use either legacy format or enhanced markdown format:')
      .addFields([
        { name: '📝 Example Format', value: `\`\`\`${formatExample}\`\`\`` },
        { name: '🔤 Update Keys', value: '`[NEW]` New features\n`[FIX]`/`[BUG]` Bug fixes\n`[CHANGE]` Changes\n`[BALANCE]` Balance updates\n`[CONTENT]` New content' },
        { name: '📋 Legacy Symbols', value: '`+` New features\n`-` Bug fixes\n`*` Changes' },
        { name: '🎨 Markdown Support', value: '**Bold**, *italic*, `code`, lists, and links supported in new format' },
        { name: '📂 Areas & Headings', value: 'AREA_NAME: for categories\n`>` Main headings\n`>>` Sub-headings\n`+>Tag` for heading tags\n`-D` for descriptions' },
        { name: '⚠️ Important', value: '• Area names must end with colon (:)\n• Both formats work together\n• Include Version: and Date: lines' }
      ])
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }

  async sendStatusEmbed(message) {
    const embed = new EmbedBuilder()
      .setColor(0x00FF00)
      .setTitle('📊 Bot Status')
      .addFields([
        { name: '🤖 Status', value: 'Online and Ready', inline: true },
        { name: '📂 Channel', value: `<#${this.patchNotesChannelId}>`, inline: true },
        { name: '🕒 Uptime', value: `${Math.floor(this.client.uptime / 1000 / 60)} minutes`, inline: true },
        { name: '👮 Allowed Roles', value: this.allowedRoles.join(', ') || 'Administrator only', inline: false }
      ])
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }

  async start() {
    try {
      await this.client.login(process.env.DISCORD_BOT_TOKEN);
    } catch (error) {
      console.error('❌ Failed to start bot:', error);
      process.exit(1);
    }
  }
}

// Start the bot
const bot = new PatchNotesBot();
bot.start();