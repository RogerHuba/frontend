# SWG Infinity Frontend - Vercel Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites

- A Vercel account (free tier available at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Quick Deploy Options

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:

   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy from your project directory:

   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

#### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and login
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js and configure the build settings
5. Click "Deploy"

### ⚙️ Configuration Files

Your project includes these Vercel-optimized configuration files:

- **`vercel.json`** - Vercel-specific configuration
- **`next.config.js`** - Next.js configuration optimized for Vercel
- **`.vercelignore`** - Files to exclude from deployment
- **`.env.example`** - Template for environment variables

### 🌍 Environment Variables

If you need environment variables in production:

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add variables like:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`
   - `NEXT_PUBLIC_DISCORD_INVITE=your-discord-invite-link`

### 📁 Project Structure

```text
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── data/             # JSON data files
│   └── hooks/            # Custom React hooks
├── vercel.json           # Vercel configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

### 🔧 Build Configuration

Your project is configured with:

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Package Manager**: npm (recommended for Vercel)
- **Node.js Version**: 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 📊 Performance Features

- **Static Site Generation (SSG)** for optimal performance
- **Image Optimization** enabled for faster loading
- **Code Splitting** automatic with Next.js
- **Gzip Compression** enabled via Vercel

### 🛠️ Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 🔄 Automatic Deployments

Once connected to Git:

- **Production**: Deploys automatically when you push to `main` branch
- **Preview**: Creates preview deployments for pull requests
- **Development**: Use `npm run dev` for local development

### 📝 Build Scripts

Available npm scripts:

```bash
npm run dev        # Local development server
npm run build      # Production build
npm start          # Start production server locally
npm run lint       # Run linting
npm run format     # Format code
```

### 🐛 Troubleshooting

**Build Errors:**

- Check TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all environment variables are set

**Deployment Issues:**

- Check Vercel Function Logs in dashboard
- Verify Node.js version compatibility
- Review build output for errors

**Performance:**

- Use Vercel Analytics to monitor performance
- Check Core Web Vitals in the dashboard
- Optimize images and reduce bundle size

### 📈 Monitoring

Vercel provides built-in monitoring:

- **Real User Monitoring (RUM)**
- **Core Web Vitals**
- **Function Logs**
- **Deployment Analytics**

### 🎯 Next Steps After Deployment

1. **Set up monitoring** in Vercel Dashboard
2. **Configure custom domain** if needed
3. **Add environment variables** for production
4. **Set up Vercel Analytics** for insights
5. **Configure branch protection** in Git for safer deployments

---

Your SWG Infinity website is now ready for deployment! 🌟
