# Hosting Guide

Deployment steps for Stage 05. Follow the section for your chosen hosting target.

## Target Domain: myvisualizer.com

---

## Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` from the project root and follow prompts
3. Set environment variables: `vercel env add VITE_CLIENT_ID` (repeat for each key)
4. Assign your custom domain in the Vercel dashboard under Domains
5. Run `vercel --prod` to deploy to production

**vercel.json** (place in project root):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify deploy --build` from the project root
3. Set environment variables in Netlify dashboard under Site Settings > Environment
4. Add custom domain in Netlify dashboard under Domain Management

**netlify.toml** (place in project root):
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`
4. Enable GitHub Pages in repo settings (branch: gh-pages)
5. Note: environment variables are not supported natively -- use a backend proxy for API keys

---

## Post-Deploy Checklist

- [ ] App loads at myvisualizer.com
- [ ] Music platform OAuth redirect URI updated to include the live domain
- [ ] API keys are NOT visible in browser dev tools network tab
- [ ] Tested on mobile viewport (optional but recommended for general public)
