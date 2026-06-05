# Music Visualizer

Takes a music platform choice through concept, initiation, execution, testing, and publishing to produce a live music visualizer web app with an OS-themed UI.

## Folder Map

```
music-visualizer/
├── CLAUDE.md          (you are here)
├── CONTEXT.md         (start here for task routing)
├── setup/             (onboarding questionnaire)
├── shared/            (cross-stage files: app identity, platform specs)
└── stages/
    ├── 01-concept/    (define platform, style, and color scheme)
    ├── 02-initiation/ (scaffold project and set up API)
    ├── 03-execution/  (build the visualizer app)
    ├── 04-testing/    (verify integration and sync)
    └── 05-publishing/ (deploy to a public domain)
```

## Triggers

| Keyword | Action |
|---------|--------|
| `setup` | Run onboarding questionnaire |
| `status` | Show pipeline completion for all stages |

### How `status` works

Scan `stages/*/output/` folders. For each stage, if the output folder contains files other than .gitkeep, the stage is COMPLETE. Otherwise PENDING. Render:

```
Pipeline Status: music-visualizer

  [01-concept] --> [02-initiation] --> [03-execution] --> [04-testing] --> [05-publishing]
     STATUS            STATUS             STATUS            STATUS            STATUS
```

## Routing

| Task | Go To |
|------|-------|
| Define visualizer concept | `stages/01-concept/CONTEXT.md` |
| Scaffold project and API | `stages/02-initiation/CONTEXT.md` |
| Build the visualizer | `stages/03-execution/CONTEXT.md` |
| Test integration and sync | `stages/04-testing/CONTEXT.md` |
| Deploy to public domain | `stages/05-publishing/CONTEXT.md` |

## What to Load

| Task | Load These | Do NOT Load |
|------|-----------|-------------|
| Concept | `stages/01-concept/references/visualizer-styles.md`, `shared/app-identity.md` | stages 02-05 |
| Initiation | `stages/01-concept/output/concept-brief.md`, `stages/02-initiation/references/node-setup.md`, `stages/02-initiation/references/os-templates.md`, `shared/platform-specs.md` | stages 03-05, stage 01 references |
| Execution | `stages/01-concept/output/concept-brief.md`, `stages/02-initiation/output/project-scaffold.md`, `stages/02-initiation/output/api-setup-guide.md`, `stages/03-execution/references/build-conventions.md` | stages 01 references, stages 04-05 |
| Testing | `stages/03-execution/output/app/`, `stages/04-testing/references/test-checklist.md` | stages 01-02, stage 05 |
| Publishing | `stages/04-testing/output/test-report.md`, `stages/05-publishing/references/hosting-guide.md`, `shared/app-identity.md` | stages 01-03 |

## Stage Handoffs

Each stage writes its output to its own `output/` folder. The next stage reads from there. If you edit an output file, the next stage picks up your edits.
