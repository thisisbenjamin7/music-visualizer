# Test Checklist

Full list of test cases for Stage 04. Work through each category in order.

## Category 1: API Integration

- [ ] OAuth authentication flow completes without error
- [ ] Access token is stored and refreshes correctly
- [ ] Current track endpoint returns expected data shape
- [ ] Playback state updates when track changes
- [ ] App handles "nothing playing" state gracefully

## Category 2: Visualizer Synchronization

- [ ] Visualizer starts animating when a track plays
- [ ] Visualizer pauses or stills when playback is paused
- [ ] Animation responds to track changes within 2 seconds
- [ ] No console errors during normal playback

## Category 3: OS-Themed UI

- [ ] Window chrome renders correctly (title bar, menu bar, status bar)
- [ ] Current track name and artist appear in the status bar
- [ ] UI is legible at 1280x720 and 1920x1080
- [ ] Fonts match the OS template spec

## Category 4: Cross-Browser

- [ ] Chrome: all features work
- [ ] Firefox: all features work
- [ ] Safari: note any Web Audio API or OAuth differences

## Category 5: Error States

- [ ] No track playing: shows a placeholder message, not a blank screen
- [ ] API token expired: app prompts re-authentication, does not crash
- [ ] Network loss: app shows offline state, recovers when connection returns

## Severity Definitions

| Severity | Definition |
|----------|-----------|
| Blocker | App cannot be used -- crash, auth failure, or blank screen |
| Major | Core feature broken but app partially usable |
| Minor | Visual glitch or edge case with low user impact |
