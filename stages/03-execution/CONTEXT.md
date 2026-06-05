# Stage 03: Execution

Build the music visualizer app -- OS-themed UI, music platform API integration, and audio sync logic.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Previous stage | `../02-initiation/output/project-scaffold.md` | Full file | Folder structure to build into |
| Previous stage | `../02-initiation/output/api-setup-guide.md` | Full file | API credentials and integration steps |
| Concept | `../01-concept/output/concept-brief.md` | Full file | Style, template, color scheme |
| Reference | `references/build-conventions.md` | Full file | Code structure rules and shared constants |

## Process

1. Confirm all API credentials are in place (api-setup-guide.md checklist)
2. Build the OS-themed window chrome (title bar, menu bar, status bar) per the template
3. Implement the visualizer canvas drawing loop for the chosen style
4. Integrate the music platform API: authenticate, fetch current track, poll playback state
5. Wire sync: map playback progress to visualizer animation timing
6. Apply color scheme via constants.js
7. **[Checkpoint]** Present the working UI. Ask: does the style and sync feel right?
8. Fix any issues from checkpoint feedback
9. Write all code files to output/app/

## Checkpoints

| After Step | Agent Presents | Human Decides |
|------------|---------------|---------------|
| 6 | Working visualizer with OS chrome and music sync | Whether the visual style and sync match the concept |

## Audit

| Check | Pass Condition |
|-------|---------------|
| OS chrome complete | Title bar, menu bar, and status bar rendered per template spec |
| API integration | Current track fetches and updates on song change |
| Sync wired | Visualizer animation responds to playback state |
| Constants used | All colors sourced from constants.js, none hardcoded |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| App code | `output/app/` | Complete project folder, runnable with `npm install && npm run dev` |
