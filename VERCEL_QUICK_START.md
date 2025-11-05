# 🚀 Vercel Deployment - Quick Start

## ⚡ 3-Step Deploy

### 1️⃣ Update package.json
```bash
cp package.vercel.json package.json
npm install
```

### 2️⃣ Test Build
```bash
npm run build
npm run preview
```

### 3️⃣ Deploy to Vercel
```bash
# Option A: Push to GitHub and import in Vercel dashboard
# Option B: Use Vercel CLI
npx vercel --prod
```

## 📋 What Changed

### ✅ Created Files
- `vercel.json` - Deployment configuration
- `api/health.ts` - Example serverless function
- `.vercelignore` - Excludes server/ folder
- `package.vercel.json` - Clean package.json

### ✅ Updated Scripts
```json
{
  "dev": "vite",           // Was: tsx server/index.ts
  "build": "vite build",   // Was: vite build && esbuild...
  "preview": "vite preview" // New
}
```

### ✅ Removed Unused Dependencies
- express, passport, ws (server dependencies)
- esbuild, tsx (build tools)

## 🎯 Key Points

**Your App Is Now:**
- ✅ Fully static React app
- ✅ Vercel-compatible
- ✅ No server.listen() calls
- ✅ Optional serverless API routes in `/api`

**What Still Works:**
- ✅ All React components
- ✅ Client-side routing (wouter)
- ✅ All styling and assets
- ✅ Contact links (email, phone, LinkedIn)

**What Changed:**
- ❌ No Express server
- ❌ No session management
- ❌ No WebSockets
- ✅ Serverless functions instead (in `/api` folder)

## 📁 Project Structure

```
tales-sports-tech/
├── api/                    # Serverless functions
│   └── health.ts          # GET /api/health
├── client/                # React source code
│   ├── src/
│   │   ├── pages/        # Your pages
│   │   ├── components/   # Your components
│   │   └── assets/       # Images, etc.
├── dist/public/          # Build output ← Vercel serves this
├── vercel.json           # Vercel config
├── .vercelignore         # Excludes server/
└── package.json          # ⚠️ Update this!
```

## 🧪 Testing

### Local Development
```bash
npm run dev
# Opens http://localhost:5173
```

### Production Preview
```bash
npm run build
npm run preview
# Opens http://localhost:4173
```

### Test API Route
```bash
# After running preview:
curl http://localhost:4173/api/health
# {"status":"ok","message":"Server is running","timestamp":"2025-..."}
```

## 🌐 Deploy Options

### Option 1: Vercel Dashboard (Easiest)
1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 3: GitHub Actions (Advanced)
Add `.github/workflows/deploy.yml` for automatic deployments on push.

## 🔧 Adding More API Routes

Create new files in `api/` directory:

**Example: `api/contact.ts`**
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  
  // Process the contact form
  // e.g., send email via SendGrid, save to database, etc.
  
  res.status(200).json({ success: true });
}
```

**Becomes:** `/api/contact`

## 📚 Full Documentation

- **MANUAL_STEPS.md** - Detailed step-by-step guide
- **VERCEL_DEPLOYMENT.md** - Complete deployment documentation
- **package.vercel.json** - Your new package.json

## ❓ Common Issues

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### API route not found
- Check file is in `api/` folder
- Ensure `export default function handler(...)` syntax
- Verify `@vercel/node` is installed

### Assets not loading
- Check `vercel.json` outputDirectory is `dist/public`
- Verify assets use relative paths or `@assets` alias

## 🎉 You're Ready!

Just run:
```bash
cp package.vercel.json package.json
npm install
npm run build
vercel --prod
```

Your Tales Sports Tech website will be live on Vercel in minutes! 🚀
