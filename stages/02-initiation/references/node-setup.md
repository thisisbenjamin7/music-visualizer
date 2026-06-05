# Node.js Setup Guide

Prerequisites for stages 02 and 03. Install before starting initiation.

## Required Tools

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18 LTS or higher | https://nodejs.org |
| npm | bundled with Node.js | -- |

## Recommended Tech Stack

**Default (simplest):** Vite + vanilla JavaScript + Web Audio API
- Zero framework overhead
- Fast to scaffold: `npm create vite@latest vizz -- --template vanilla`

**Alternative:** Vite + React
- Use if the user wants component-based UI for the OS window chrome
- Scaffold: `npm create vite@latest vizz -- --template react`

## Project Folder Pattern

```
vizz/
├── index.html
├── src/
│   ├── main.js          (entry point)
│   ├── visualizer.js    (canvas drawing loop)
│   ├── player.js        (music platform API integration)
│   └── constants.js     (shared colors, fonts, timing)
├── assets/
│   └── os-theme/        (OS template CSS and images)
├── .env                 (API keys -- never commit)
└── package.json
```

## Environment Variables

Store API credentials in a `.env` file at the project root:

```
VITE_CLIENT_ID=your_client_id
VITE_CLIENT_SECRET=your_client_secret
VITE_REDIRECT_URI=http://localhost:5173/callback
```

Add `.env` to `.gitignore` before the first commit.
