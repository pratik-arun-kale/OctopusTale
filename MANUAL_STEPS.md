# ⚠️ MANUAL STEPS REQUIRED FOR VERCEL DEPLOYMENT

## Step 1: Update package.json

**IMPORTANT:** Replace your current `package.json` with the contents of `package.vercel.json`

### Option A: Copy the entire file
```bash
cp package.vercel.json package.json
```

### Option B: Manually update the scripts section

Open `package.json` and replace the `scripts` section:

**OLD (Remove this):**
```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push"
}
```

**NEW (Use this):**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "check": "tsc"
}
```

Also remove these unused dependencies from the `dependencies` section:
- `express`
- `express-session`
- `memorystore`
- `passport`
- `passport-local`
- `ws`

And remove these from `devDependencies`:
- `@types/connect-pg-simple`
- `@types/express`
- `@types/express-session`
- `@types/passport`
- `@types/passport-local`
- `@types/ws`
- `esbuild`
- `tsx`

**OR** just use the cleaned-up version in `package.vercel.json` which has all unnecessary dependencies removed.

## Step 2: Test Locally

After updating package.json:

```bash
# Install dependencies (if needed)
npm install

# Test development server
npm run dev

# Test production build
npm run build
npm run preview
```

## Step 3: Deploy to Vercel

### Quick Deploy (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy" (Vercel will auto-detect settings from `vercel.json`)

### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## What's Been Done For You

✅ Created `vercel.json` with optimal configuration
✅ Created `api/health.ts` serverless function example
✅ Created `.vercelignore` to exclude server files
✅ Installed `@vercel/node` for API routes
✅ Created `package.vercel.json` with clean dependencies
✅ Backed up original package.json to `package.json.backup`

## Files Created

- **vercel.json** - Vercel deployment configuration
- **api/health.ts** - Example serverless API route
- **.vercelignore** - Files to exclude from deployment
- **package.vercel.json** - Updated package.json (copy to package.json)
- **VERCEL_DEPLOYMENT.md** - Complete deployment guide
- **package.json.backup** - Your original package.json

## Final File Structure

```
project/
├── api/
│   └── health.ts              # /api/health endpoint
├── client/
│   └── src/                   # Your React app
├── dist/public/               # Build output (gitignored)
├── server/                    # Excluded from Vercel (via .vercelignore)
├── .vercelignore
├── vercel.json
├── package.json               # ⚠️ YOU NEED TO UPDATE THIS
├── package.vercel.json        # Copy this to package.json
└── VERCEL_DEPLOYMENT.md       # Full guide

```

## Need Help?

Read `VERCEL_DEPLOYMENT.md` for:
- Complete deployment guide
- How to add more API routes
- Environment variables setup
- Troubleshooting tips
- Production checklist
