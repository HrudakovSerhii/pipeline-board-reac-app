# Pipeline Board App

Headless React kanban board for tracking candidates through a hiring pipeline. Data is driven by a local JSON file served via an nginx REST API — no application backend required.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- nginx (static file server + JSON REST API)
- Prettier + ESLint (code style)
- Vitest + React Testing Library (unit + component tests)

## Architecture

```
nginx
 ├── GET  /api/board              → BoardResponse (vacancy + candidates)
 └── PATCH /api/candidates/:id   → UpdateCandidateRequest

src/
 ├── App.tsx                      ErrorBoundary root
 ├── main.tsx
 ├── index.css                    Tailwind v4 CSS-first design tokens
 ├── assets/
 │   └── icons.ts                 SVG path constants
 ├── types/
 │   └── api.types.ts             Entity types — OpenAPI source of truth
 ├── api/
 │   ├── api.constants.ts
 │   ├── api.errors.ts            ApiError class
 │   ├── board.api.ts             GET /api/board
 │   └── candidates.api.ts        PATCH /api/candidates/:id
 ├── hooks/
 │   ├── useBoardState.ts         Fetch + optimistic stage move + localStorage
 │   ├── useSearch.ts
 │   └── useShortlistFilter.ts
 ├── utils/
 │   ├── candidate.ts             Candidate formatters
 │   ├── cn.ts                    Class name utility
 │   ├── localStorage.ts
 │   └── string.ts
 └── components/
     ├── layout/
     │   ├── layout.main.tsx      MainLayout — wires all hooks + panels
     │   ├── NavigationSidebar/   Sidebar with collapsible nav sections
     │   ├── VacancyCard/         3-panel card (info · rate · management)
     │   ├── SearchBar/
     │   └── ViewOptionsPanel/    Shortlist toggle + view controls
     ├── board/
     │   ├── KanbanBoard/         DnD context + column rendering + drag overlay
     │   ├── KanbanColumn/        Droppable column + SortableCandidateCard wrapper
     │   └── board.utils.ts       resolveDropStage + column helpers
     ├── candidate/
     │   ├── CandidateCard/       Full candidate card
     │   ├── ProfileHeader/
     │   ├── AvailabilityTags/
     │   ├── SkillsRow/
     │   ├── CompensationSummary/
     │   ├── AiMatchBreakdown/    Score bars per category
     │   ├── RecruiterBadge/
     │   ├── HiredNotice/
     │   └── DeclinedNotice/
     └── ui/
         ├── Avatar/
         ├── PhotoAvatar/
         ├── ColumnBadge/
         ├── Pill/
         ├── ScoreCircle/
         ├── SkillChip/
         ├── SidebarButton/
         └── icons/               nav-icons · board-icons · search-icons · vacancy-icons
```

Board state mutations (stage change, shortlist toggle) are written back through the API and persisted in the JSON file. `localStorage` mirrors the last known state for refresh resilience.

## Data Types

### `src/types/api.types.ts`

OpenAPI source of truth. No UI-only fields, no display-formatted strings.

Primitives: `PipelineStage` · `AvailabilityStatus` · `VacancyStatus` · `EmploymentType` · `Currency` · `RatePeriod` · `EngagementMode`

Value types: `DateRange` · `Skill` · `Person`

Candidate: `CandidateRate` · `CandidateAvailability`

Vacancy budget: `VacancyBudget`

AI scoring: `AiMatchBreakdown`

Entities: `Candidate` · `Vacancy` · `VacancyManagement`

API shapes: `BoardResponse` · `UpdateCandidateRequest`

## Pipeline Columns

`applications` · `under_review` · `first_interview` · `contract_offer` · `hired` · `not_proceeding`

## Functional Requirements

1. Render the full board from the JSON API source
2. Per-column counts, kept accurate on card move
3. Horizontal scroll when viewport is narrow
4. Search filtering by candidate name
5. "Show only shortlisted" toggle
6. Drag-and-drop between columns with immediate count updates
7. Persist moved state (localStorage + API write-back)

## Testing

Vitest + React Testing Library. Run with:

```
npm test           # watch mode
npm run test:ui    # browser UI
npm run coverage   # coverage report
```

Core behavior covered by tests:

- `CandidateCard` — renders skills, score, availability, stage-gated notices (hired/declined), recruiter badge, AI match breakdown visibility, compensation
- `resolveDropStage` — drop on empty column, drop on card (same/different column), unknown id, all valid stage names
- `formatNumber` / `formatBudgetRange` / `budgetLabel` — number formatting, budget range strings, label copy per mode + period
