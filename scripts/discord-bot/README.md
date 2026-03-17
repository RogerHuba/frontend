# Discord Bot for Patch Notes Automation

Automatically processes patch notes posted in Discord and updates the website's JSON file.

## 🚀 Features

- **Automatic Detection**: Recognizes both legacy and enhanced patch notes formats
- **Enhanced Markdown Support**: Rich formatting with bold, italic, code blocks, and links
- **Hierarchical Organization**: Support for nested headings with `>`, `>>`, `>>>`
- **Advanced Categorization**: Tags (`+>TagName`) and descriptions (`-D`) support
- **Multiple Format Keys**: `[NEW]`, `[FIX]`, `[BALANCE]`, `[CONTENT]`, `[CHANGE]` and legacy `+`, `-`, `*`
- **Role-based Permissions**: Only users with specific roles can post patch notes
- **Real-time Processing**: Instantly converts and updates website data
- **Rich Embeds**: Beautiful Discord responses with success/error information
- **Bot Commands**: Help, format guide, and status commands with detailed examples
- **Error Handling**: Clear error messages and validation for both formats
- **Backward Compatibility**: Supports existing legacy format alongside new features

## 📋 Setup Instructions

### 1. Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it "SWG Patch Notes Bot"
3. Go to "Bot" section and create a bot
4. Copy the bot token (keep this secret!)
5. Enable "Message Content Intent" under Privileged Gateway Intents

### 2. Invite Bot to Server

Generate an invite link with these permissions:
- Send Messages
- Use Slash Commands
- Read Message History
- Add Reactions
- Embed Links

Invite URL format:
```
https://discord.com/api/oauth2/authorize?client_id=1441188851610685640&permissions=116736&scope=bot

https://discord.gg/QWBMgQ5B
```

### 3. Install Dependencies

```bash
cd scripts/discord-bot
npm install
```

### 4. Configure Environment

1. Copy `.env.example` to `.env`
2. Fill in the required values:

```env
DISCORD_BOT_TOKEN=your_actual_bot_token
PATCH_NOTES_CHANNEL_ID=123456789012345678
ALLOWED_ROLES=Developer,Admin,Patch Manager
```

### 5. Get Channel ID

1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click the channel where patch notes will be posted
3. Select "Copy ID"
4. Paste this ID in your `.env` file

### 6. Start the Bot

```bash
npm start

# Or for development with auto-restart:
npm run dev
```

## 🤖 Bot Commands

- `!patch help` - Show comprehensive help information and bot capabilities
- `!patch format` - Display format examples for both legacy and enhanced markdown formats
- `!patch status` - Show bot status and current configuration

## 📝 Usage

### For Team Members

The bot supports **both legacy and enhanced formats** for maximum flexibility:

#### Enhanced Markdown Format (Recommended)

```text
Version: 2.1.0
Date: November 20, 2025

JEDI:
[NEW] **Enhanced lightsaber combat** with improved mechanics
[FIX] Fixed Force Lightning not working in `combat scenarios`
[CHANGE] Force Jump range increased from *10m* to **15m**

COMBAT:
[BALANCE] Weapon damage rebalanced for **improved PvP**
[CONTENT] New content including:
  - Energy rifles
  - Plasma weapons
  
> Advanced Features +>New
-D Rich descriptions with markdown support
[NEW] Advanced targeting system with **improved accuracy**
```

#### Legacy Format (Still Supported)

```text
Version: 2.0.99
Date: August 15, 2025

JEDI:
+ Added new lightsaber crystal types
- Fixed Force Lightning not working properly
* Changed Force Jump range from 10m to 15m

COMBAT:
- Fixed rifle accuracy bug
* Reduced pistol damage by 5%
+ Added new combat animations
```

### Format Features

#### Update Type Keys

- `[NEW]` - New features/additions
- `[FIX]` / `[BUG]` - Bug fixes
- `[CHANGE]` - Changes/modifications  
- `[BALANCE]` - Balance updates
- `[CONTENT]` - New content additions

#### Legacy Symbols (Still Supported)

- `+` = New features/additions
- `-` = Bug fixes
- `*` = Changes/adjustments/balance updates

#### Advanced Features

- **Hierarchical Headings**: Use `>`, `>>`, `>>>` for nested organization
- **Tags**: Use `+>TagName` for categorization
- **Rich Descriptions**: Use `-D` for detailed explanations
- **Full Markdown**: **Bold**, *italic*, `code`, lists, and links supported

#### Markdown Support

- **Bold text** with `**text**`
- *Italic text* with `*text*`
- `Inline code` with backticks
- Bulleted lists with `-` or `*`
- Links with `[text](url)` format

1. **Bot will automatically**:
   - Detect the patch notes format
   - Validate your permissions
   - Process and convert to JSON
   - Update the website's patch notes file
   - Respond with success/error information

### Reactions

- ⏳ = Processing your patch notes
- ✅ = Successfully processed and website updated
- ❌ = Error occurred (check the error message)

## 🔒 Security

- **Role-based permissions**: Only users with specified roles can post patch notes
- **Admin override**: Server administrators always have permission
- **Channel restriction**: Bot only responds in the designated channel
- **Input validation**: Validates patch notes format before processing

## 🛠️ Deployment Options

### Option 1: Local Development
```bash
npm start
```

### Option 2: PM2 (Production)
```bash
npm install -g pm2
pm2 start discord-bot.js --name "patch-notes-bot"
pm2 save
pm2 startup
```

### Option 3: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["npm", "start"]
```

### Option 4: Cloud Hosting
- Railway
- Heroku
- Render
- DigitalOcean App Platform

## 🔧 Configuration

### Allowed Roles
Set role names in `.env` file:
```env
ALLOWED_ROLES=Developer,Admin,Patch Manager,Community Manager
```

### Channel Setup
- Create a dedicated #patch-notes channel
- Set appropriate permissions (only patch note authors can post)
- Pin the format example for reference

## 🐛 Troubleshooting

### Bot not responding:
1. Check bot is online (`!patch status`)
2. Verify channel ID is correct
3. Check bot permissions in Discord
4. Review console logs for errors

### Permission errors:
1. Verify user has required role
2. Check role names match exactly (case-sensitive)
3. Ensure bot can read roles

### Format errors:
1. Use `!patch format` to see correct format
2. Ensure area names end with colon (:)
3. Use proper symbols (+, -, *)
4. Include Version: and Date: lines

## 📊 Monitoring

The bot logs all activity:
- Successful patch processing
- Permission denials
- Format errors
- System errors

Console output example:
```
🤖 SWG Patch Notes Bot#1234 is online and ready!
📝 Monitoring channel ID: 123456789012345678
👮 Allowed roles: Developer, Admin
✅ Processed patch 2.1.0 from Discord
```

## 🔄 Workflow Integration

This bot can be part of a larger workflow:
1. Developer writes patch notes in simple format
2. Posts in Discord channel
3. Bot automatically updates website
4. Website displays new patch notes immediately
5. Optional: Bot can trigger website rebuild/deployment

Perfect for non-technical team members who need to update patch notes without touching code!