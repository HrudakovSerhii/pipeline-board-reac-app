# Headless React Kanban board application

## General

React application to show professional candidate progress in hiring process with status, filters, search functions.
No backend required.

## Layout Design

### Main Layout

- Left navigation rail
- Top vacancy/header area
- Filter/search/action control row
- Candidate pipeline board (kanban-style columns)

### Board Layout

Each column should contain candidate cards with key metadata. Target pipeline columns:

- Applications
- Under review
- First interview
- Contract offer
- Hired
- Not proceeding

### Functional requirements

1. Render the full board using data from a local JSON/mock source.
2. Show per-column counts and keep them accurate.
3. Implement horizontal scrolling for the pipeline area when viewport is narrow.
4. Implement search filtering by candidate name.
5. Implement the "Show only shortlisted" toggle/filter.
6. Implement drag-and-drop of candidate cards between columns.
7. When cards move columns, update counts immediately.
8. Preserve moved state on refresh (localStorage is enough).

### UI/UX requirements

- Match Figma spacing, typography, colors, borders, and hierarchy as closely as possible.
- Keep layout visually stable at 1440px desktop width.
- Handle responsive behavior for smaller screens without breaking usability.
- Include clear hover/focus states on interactive controls.
- Use loading/empty states where appropriate.

### Testing requirements

Add meaningful tests for core behavior:

- Search filtering
- Shortlist filter
- Drag-and-drop state updates (or extracted reducer/state logic)
- Count updates per column

### Bonus (optional)

- Keyboard-accessible drag/drop behavior
- Smooth motion/transitions between states
- Storybook examples for key UI components
