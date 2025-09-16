# Netlify Deployment Guide

This guide will help you deploy your e-plantShopping React application to Netlify.

## Option 1: Deploy using Netlify CLI (Recommended)

1. Make sure you have installed Netlify CLI:
   ```
   npm install netlify-cli --save-dev
   ```

2. Login to your Netlify account:
   ```
   npx netlify login
   ```

3. Initialize Netlify in your project (if not already done):
   ```
   npx netlify init
   ```

4. Deploy your site:
   ```
   npm run deploy
   ```
   
   This will build your project and deploy it to Netlify.

## Option 2: Deploy using Netlify Dashboard

1. Build your project:
   ```
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/) and log in.

3. Click on "New site from Git" or drag and drop your `dist` folder onto the Netlify dashboard.

4. If using Git deployment method:
   - Connect to your GitHub repository
   - Set build command to: `npm run build`
   - Set publish directory to: `dist`

## Important Notes

- The `_redirects` file in the public folder handles client-side routing.
- The `netlify.toml` file contains the configuration for your Netlify deployment.
- The `base` in vite.config.js has been updated to "/" for Netlify.

## Testing Your Deployment

After deployment, make sure to test all routes and functionality of your application to ensure everything works as expected.

## Troubleshooting

If you encounter any issues:
1. Check Netlify build logs for errors
2. Verify your redirects are working properly
3. Make sure your React Router is configured correctly
