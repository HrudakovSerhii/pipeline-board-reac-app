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

React app
 ├── src/api/          fetch functions + API → component prop mappers
 ├── src/types/
 │   └── api.types.ts  entity types, OpenAPI source of truth
 └── src/components/   board, columns, cards
```

Board state mutations (stage change, shortlist toggle) are written back through the API and persisted in the JSON file. `localStorage` mirrors the last known state for refresh resilience.

## Data Types

### `src/types/api.types.ts`

OpenAPI source of truth. No UI-only fields, no display-formatted strings.

Primitives: `PipelineStage` · `AvailabilityStatus` · `VacancyStatus` · `EmploymentType` · `Currency` · `RatePeriod`

Value types: `DateRange` · `Skill` · `Person` · `Rate`

Candidate compensation: `CandidateCompensation` · `CandidateAvailability`

Vacancy budget: `FreelanceBudget` · `PayrollBudget` · `PermanentBudget` · `VacancyBudget`

Entities: `Candidate` · `Vacancy` · `VacancyManagement`

API shapes: `BoardResponse` · `UpdateCandidateRequest`

Card: `CardProps` · `ProfileInfo` · `AvailabilityInfo` · `MatchScore` · `Compensation`

Info panel: `CandidateInfoProps` · `VacancyManagement` · `CompensationRate` · `FreelanceRate` · `PayrollContractorRate` · `PermanentEmploymentRate`

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

- Search filter
- Shortlist filter
- Drag-and-drop state updates / column reducer logic
- Column count accuracy
