# Deployment Guide

This project uses GitHub Actions to automatically build and deploy to GitHub Pages.

## How it works

1. **Automatic Deployment**: Every time you push changes to the `main` branch, GitHub Actions will automatically:
   - Install dependencies
   - Build the Vue.js project
   - Deploy to GitHub Pages

2. **Manual Deployment**: You can also trigger deployment manually from the GitHub Actions tab.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"

### 2. Repository Settings
Make sure your repository has the following settings:
- **Default branch**: `main` (or update the workflow file if using a different branch)
- **Pages source**: GitHub Actions

### 3. Custom Domain (Optional)
If you want to use a custom domain (like `decentraguild.com`):
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your DNS settings to point to GitHub Pages

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) includes:
- **Node.js 20** setup with npm caching
- **Dependency installation** using `npm ci`
- **Build process** using `npm run build`
- **Automatic deployment** to GitHub Pages

## Troubleshooting

- Check the "Actions" tab in your repository for build logs
- Ensure your `package.json` has the correct build script
- Verify that GitHub Pages is enabled in repository settings

## Manual Build (if needed)

If you need to build manually:
```bash
npm install
npm run build
```

The built files will be in the `dist` folder.
