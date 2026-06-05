# Onboarding Questionnaire: Music Visualizer

Read this file when the user types "setup". Ask ALL questions below in a single conversational pass. The user should be able to answer everything in one message. Collect answers, then replace placeholders across the specified files. After all replacements, scan the entire workspace for remaining `{{` patterns -- if any remain, ask for the missing info.

---

### Q1: What is the name of your music visualizer app?
- Placeholder: `{{APP_NAME}}`
- Files: `shared/app-identity.md`, `stages/02-initiation/references/node-setup.md`
- Type: free text
- Default: "VisualBeat"

### Q2: Which music platform will you integrate with?
- Placeholder: `{{MUSIC_PLATFORM}}`
- Files: `shared/app-identity.md`, `shared/platform-specs.md`, `stages/02-initiation/references/node-setup.md`
- Type: selection
- Options: Spotify, Apple Music, YouTube Music, SoundCloud, other (specify)
- Default: Spotify

### Q3: Which OS-themed template do you want for the UI?
- Placeholder: `{{OS_TEMPLATE}}`
- Files: `stages/02-initiation/references/os-templates.md`, `stages/02-initiation/CONTEXT.md`
- Type: selection
- Options: Windows 98, Mac Classic (System 7), Windows XP, other (describe)
- Default: Windows 98

### Q4: What is your color scheme?
- Placeholder: `{{COLOR_SCHEME}}`
- Files: `stages/03-execution/references/build-conventions.md`
- Type: free text
- Default: "dark background with green accent, inspired by old-school VU meters"
- Tip: hex values work best (e.g., "#0a0a0a background, #00ff88 bars"); a description also works and Stage 03 will derive values from it

### Q5: What domain or hosting target will you deploy to?
- Placeholder: `{{DOMAIN}}`
- Files: `shared/app-identity.md`, `stages/05-publishing/references/hosting-guide.md`
- Type: free text
- Default: "GitHub Pages (username.github.io/app-name)"
- Examples: "myvisualizer.com on Vercel", "netlify-subdomain.netlify.app", "username.github.io/visualbeat"

---

## After Onboarding

Tell the user:

"Got it -- your workspace is configured. Here is what was set:

- **App name:** [APP_NAME]
- **Music platform:** [MUSIC_PLATFORM]
- **OS template:** [OS_TEMPLATE]
- **Color scheme:** [COLOR_SCHEME]
- **Deployment target:** [DOMAIN]

When you are ready, start with Stage 01 -- Concept. I will walk you through confirming your visualizer style and locking in the concept brief."

Then point them to `stages/01-concept/CONTEXT.md`.
