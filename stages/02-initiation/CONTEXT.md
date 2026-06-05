# Stage 02: Initiation

Scaffold the project folder structure and produce the API setup guide for the chosen music platform.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Previous stage | `../01-concept/output/concept-brief.md` | Full file | Platform and template choices drive scaffold |
| Reference | `references/node-setup.md` | Full file | Tech stack and build tool options |
| Reference | `references/os-templates.md` | "Windows 98" section | Template layout for the chosen OS style |
| Shared | `../../shared/platform-specs.md` | Full file | API auth and endpoint reference |

## Process

1. Read the concept brief to confirm platform, OS template, and color scheme
2. Generate the project folder structure (see node-setup.md for scaffold pattern)
3. Write the API setup guide: credentials steps, OAuth flow, environment variable names
4. Produce a credentials checklist the user must complete before Stage 03
5. Confirm tech stack (Vite + vanilla JS default; React optional)
6. Write project-scaffold.md and api-setup-guide.md to output

## Audit

| Check | Pass Condition |
|-------|---------------|
| Scaffold matches concept | Folder structure reflects the platform and tech stack chosen in the concept brief |
| API guide complete | Setup guide covers authentication, environment variables, and includes a credentials checklist |
| Tech stack confirmed | project-scaffold.md names the chosen framework (Vite + vanilla JS or React) |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| Project scaffold | `output/project-scaffold.md` | Folder tree with file descriptions |
| API setup guide | `output/api-setup-guide.md` | Step-by-step credentials setup and checklist |
