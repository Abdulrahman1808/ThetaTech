# Deployment Guide for Theta Tech Website

## Prerequisites

1. Ensure you have all project files ready
2. Make sure the project builds successfully locally
3. Have your GitHub repository ready

## Step-by-Step Git Deployment

### 1. Initialize Local Repository

If you haven't already initialized git in your project folder:

```bash
cd /path/to/your/project
git init
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/Abdulrahman1808/ThetaTech.git
```

### 3. Add All Files

```bash
git add .
```

### 4. Commit Changes

```bash
git commit -m "Initial commit: Theta Tech website with complete project structure"
```

### 5. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Alternative: Upload via GitHub Web Interface

If you prefer using the GitHub web interface:

1. Go to https://github.com/Abdulrahman1808/ThetaTech
2. Click "uploading an existing file"
3. Drag and drop all your project files
4. Write a commit message
5. Click "Commit changes"

## Vercel Deployment (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts and your site will be live!

## Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

## GitHub Pages Deployment

1. In your repository settings, go to "Pages"
2. Select "GitHub Actions" as source
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Environment Variables

No environment variables are required for this project as it's a static website.

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Update your DNS records

### For GitHub Pages:
1. Add a `CNAME` file to your repository with your domain
2. Configure DNS with your domain provider

## SSL Certificate

All mentioned platforms (Vercel, Netlify, GitHub Pages) provide free SSL certificates automatically.

## Performance Optimization

Before deploying, ensure:
- Images are optimized
- Build size is minimal (`npm run build` should complete successfully)
- No console errors in production build

## Monitoring

Consider setting up:
- Google Analytics
- Performance monitoring
- Uptime monitoring

## Troubleshooting

### Build Fails
- Check all imports are correct
- Ensure all dependencies are installed
- Verify TypeScript compilation

### 404 Errors
- Ensure routing is configured correctly
- Check that all file paths are relative

### Slow Loading
- Optimize images
- Check bundle size
- Enable gzip compression