# Stage 05: Publishing

Deploy the music visualizer app to a public domain and confirm it is live.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Previous stage | `../03-execution/output/app/` | Full folder | The app to deploy |
| Previous stage | `../04-testing/output/test-report.md` | "Issues" section | Blockers must be resolved before publishing |
| Reference | `references/hosting-guide.md` | Full file | Deployment steps for the chosen host |
| Shared | `../../shared/app-identity.md` | Full file | App name and target domain |

## Process

1. Read the test report -- confirm no open blockers remain
2. Run the production build: `npm run build`
3. Follow the hosting guide steps for the chosen deployment target
4. Set environment variables on the hosting platform (never commit API keys)
5. Deploy and confirm the live URL loads correctly
6. Update the music platform OAuth redirect URI to include the live domain
7. Write deploy config and live URL to output

## Audit

| Check | Pass Condition |
|-------|---------------|
| No blockers | test-report.md contains zero open blockers |
| Build succeeds | `npm run build` completes without errors |
| Live URL confirmed | App loads at the deployed domain in a browser |
| Env vars set | API keys are on the hosting platform, not in committed code |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| Deploy config | `output/deploy-config/` | vercel.json or netlify.toml |
| Live URL | `output/live-url.txt` | Plain text URL |
