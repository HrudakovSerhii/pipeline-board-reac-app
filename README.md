# Pipeline Board App

Headless React kanban board for tracking candidates through a hiring pipeline. Data is driven by a local JSON file served via an nginx REST API — no application backend required.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- nginx (static file server + JSON REST API)

## Architecture

```
nginx
 ├── GET  /api/board              → BoardResponse (vacancy + candidates)
 └── PATCH /api/candidates/:id   → UpdateCandidateRequest

React app
 ├── src/api/          fetch functions + API → component prop mappers
 ├── src/types/
 │   ├── api.types.ts  entity types, OpenAPI source of truth
 │   └── design.types.ts  Figma-derived component props (reference)
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

### `src/types/design.types.ts`

Figma-derived component props. Reference only — not used for API contracts. Imports shared primitives from `api.types.ts` to prevent enum drift.

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

Core behavior covered by tests:

- Search filter
- Shortlist filter
- Drag-and-drop state updates / column reducer logic
- Column count accuracy

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
