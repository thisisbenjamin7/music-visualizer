# Stage 04: Testing

Verify that the music platform integration, audio synchronization, and visualizer UI all work correctly.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| Previous stage | `../03-execution/output/app/` | Full folder | The app to test |
| Reference | `references/test-checklist.md` | Full file | All test categories to cover |

## Process

1. Run the app locally: `npm install && npm run dev`
2. Test music platform integration: authenticate, fetch current track, verify data format
3. Test sync: play a track and observe visualizer response to playback state changes
4. Test cross-browser: Chrome, Firefox, Safari (Edge optional)
5. Test error states: no track playing, expired token, network loss
6. Log all issues with severity (blocker / major / minor)
7. Write test report to output

## Audit

| Check | Pass Condition |
|-------|---------------|
| API integration tested | Authentication and track fetch verified |
| Sync tested | Visualizer reacts to playback state changes |
| Cross-browser tested | Chrome and Firefox results recorded |
| Issues logged | All blockers and majors have description and reproduction steps |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| Test report | `output/test-report.md` | Results by category, issues list with severity |
