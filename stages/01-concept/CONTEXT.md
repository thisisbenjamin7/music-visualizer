# Stage 01: Concept

Define the visualizer style, OS template, and color palette for the music visualizer app.

## Inputs

| Source | File/Location | Section/Scope | Why |
|--------|--------------|---------------|-----|
| User | (conversation) | Platform, style, template, palette preferences | The choices that drive the entire build |
| Reference | `references/visualizer-styles.md` | Full file | Available visualizer style options |
| Shared | `../../shared/app-identity.md` | Full file | App name and audience context |

## Process

1. Ask the user which visualizer style they want (bars, waveform, particles, circular, or other)
2. Confirm the OS template choice (Windows 98, Mac Classic, Windows XP, or other)
3. Confirm the color scheme -- collect 2-3 hex values or a palette description
4. **[Checkpoint]** Present a concept summary: platform, style, template, palette. Ask: does this match your vision?
5. Write the concept brief to output

## Checkpoints

| After Step | Agent Presents | Human Decides |
|------------|---------------|---------------|
| 3 | Concept summary: platform, visualizer style, OS template, color palette | Whether the combination is correct before anything is built |

## Audit

| Check | Pass Condition |
|-------|---------------|
| All choices recorded | concept-brief.md contains platform, style, template, and palette |
| Color scheme usable | At least one hex value or named palette is recorded |

## Outputs

| Artifact | Location | Format |
|----------|----------|--------|
| Concept brief | `output/concept-brief.md` | Structured doc: platform, style, template, palette, app name |
