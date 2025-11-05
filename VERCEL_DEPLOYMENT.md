# Vercel Deployment Guide

## Overview
This project has been configured for deployment on Vercel as a static React + Vite application with optional serverless API routes.

## What Changed

### 1. **Project Structure**
```
project/
├── api/                    # Vercel serverless functions
│   └── health.ts          # Health check endpoint
├── client/                # React frontend source
├── dist/public/          # Build output (gitignored)
├── vercel.json           # Vercel configuration
└── .vercelignore         # Files to exclude from deployment
```

### 2. **Removed Server Dependencies**
- The custom Node.js/Express server (`server/index.ts`) is **no longer used in production**
- Server files are excluded from Vercel deployment via `.vercelignore`
- Development still works locally with `npm run dev` using Vite's dev server

### 3. **Package.json Scripts** (Manual Update Required)

**You need to manually update `package.json`** because I cannot edit it directly. Change the `scripts` section to:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "tsc"
  }
}
```

**Remove these scripts:**
- `"dev": "NODE_ENV=development tsx server/index.ts"` (old)
- `"build": "vite build && esbuild server/index.ts..."` (old)
- `"start": "NODE_ENV=production node dist/index.js"` (old)
- `"db:push": "drizzle-kit push"` (if you're not using a database)

### 4. **Configuration Files**

#### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

This configuration:
- Builds using `npm run build`
- Outputs to `dist/public` (from vite.config.ts)
- Enables client-side routing (SPA mode)
- Optimizes asset caching

#### `.vercelignore`
Excludes unnecessary files from deployment:
- `server/` directory
- Development files
- Replit-specific files

## API Routes (Optional)

### Current API Route
**`/api/health`** - Health check endpoint

Located at: `api/health.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
}
```

### Adding More API Routes

Create new files in the `api/` directory. Each file becomes an endpoint:

**Example: `/api/contact.ts`**
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  
  // Process contact form
  // Note: You'll need a database or email service for persistence
  
  res.status(200).json({ success: true, message: 'Contact received' });
}
```

**File becomes endpoint:**
- `api/health.ts` → `/api/health`
- `api/contact.ts` → `/api/contact`
- `api/users/[id].ts` → `/api/users/:id` (dynamic routes)

## Deployment Steps

### 1. **Install Vercel CLI** (Optional - for testing)
```bash
npm i -g vercel
```

### 2. **Test Locally**
```bash
# Build the project
npm run build

# Preview with Vercel CLI
vercel dev
```

### 3. **Deploy to Vercel**

**Option A: Vercel Dashboard** (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub/GitLab repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

**Option B: Vercel CLI**
```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### 4. **Configure Environment Variables** (If Needed)
If you add API routes that need secrets:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add variables like:
   - `DATABASE_URL`
   - `SENDGRID_API_KEY`
   - etc.

## Frontend API Calls

Your frontend can still make API calls to `/api/*` endpoints:

```typescript
// This works on both local dev and Vercel production
const response = await fetch('/api/health');
const data = await response.json();
```

Vercel automatically routes:
- Static files → from `dist/public`
- `/api/*` → serverless functions in `api/` directory
- Everything else → `index.html` (for client-side routing)

## Important Notes

### ✅ **What Works on Vercel**
- Static React application
- Client-side routing (wouter)
- Serverless API functions
- Environment variables
- Asset optimization

### ❌ **What Doesn't Work**
- Long-running servers (Express with `server.listen()`)
- WebSockets (use Vercel's socket support or external service)
- File system writes (use external storage like S3)
- Session stores that require server memory (use Redis/database)

### 🔄 **Migrating Features**

If you need features that require a persistent server:

1. **Sessions/Authentication**
   - Use NextAuth.js or Clerk
   - Store sessions in database/Redis

2. **Real-time Features**
   - Use Vercel's experimental WebSocket support
   - Or use services like Pusher, Ably, Socket.io (hosted)

3. **File Uploads**
   - Use Vercel Blob Storage
   - Or AWS S3, Cloudinary

## Development Workflow

### Local Development
```bash
npm run dev
```
- Runs Vite dev server on port 5173
- Hot module replacement
- No backend server needed (unless you use API routes)

### Testing Production Build
```bash
npm run build
npm run preview
```
- Builds for production
- Previews the static build locally

### Deploying
```bash
vercel --prod
```
- Deploys to Vercel production
- Automatic builds on git push (if connected to GitHub)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify `vercel.json` configuration
- Check build logs in Vercel dashboard

### API Routes Not Working
- Ensure `@vercel/node` is installed: `npm install @vercel/node`
- Check file is exported correctly: `export default function handler(...)`
- Verify route path matches file structure

### Assets Not Loading
- Check `outputDirectory` in `vercel.json` matches build output
- Verify asset paths use relative imports or `@assets` alias
- Check browser console for 404 errors

## Production Checklist

- [ ] Update `package.json` scripts (see above)
- [ ] Test build locally: `npm run build`
- [ ] Verify API routes work: `vercel dev`
- [ ] Add environment variables in Vercel dashboard
- [ ] Connect GitHub repository to Vercel
- [ ] Deploy and test production URL
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
