# Plan: Pipeline Board App — Full Build

## Context

Vite+React+TypeScript scaffold exists. Type definitions are in `src/types/`. `.claude/design/` holds Figma-exported components (`App.tsx`, `CandidateCard.tsx`) plus `svg-veygbnptro.ts` (icon SVG paths) and `theme.css` (Tailwind v4 CSS-first token definitions). Goal: decompose the design reference into atomic, rule-compliant components wired to real API types, with drag-and-drop, search/filter, and test coverage.

---

## Resolved Decisions

| Question | Decision |
|---|---|
| Icons | Copy `.claude/design/svg-veygbnptro.ts` → `src/assets/icons.ts`; inline SVG paths as in design |
| DnD | `@dnd-kit/core` + `@dnd-kit/sortable` |
| Dev mock | Vite `server.proxy` + `public/api/board.json` |
| Tailwind | **v4** (`@theme inline` syntax from `theme.css`); `@tailwindcss/vite` plugin; no `tailwind.config.ts` |

---

## Data Model — BE Architecture Options for Missing Fields

The design shows three fields not in `api.types.ts`:
- `isGloPros: boolean` — platform membership badge
- `negotiationNote?: string` — per-vacancy negotiation summary (e.g. "Negotiated 40 h/week for 30 days")
- `aiMatchBreakdown?` — per-category scores (experience, skills, rate, location, availability, industry)

**Option A — All fields in `GET /api/board` (aggregated by backend gateway)**
Backend stitches: candidate DB (`isGloPros`) + vacancy-candidate table (`negotiationNote`) + AI scoring service (`aiMatchBreakdown`) before returning the response. Frontend calls one endpoint, gets everything.
Tradeoff: board endpoint is a composite; slower if AI service has high latency.

**Option B — Core data + separate AI endpoint**
`GET /api/board` returns candidates with `isGloPros` + `negotiationNote`.
`GET /api/ai-scores?vacancyId=X` returns `Array<{ candidateId, matchScore, breakdown }>`.
Frontend calls both in parallel, merges in `board.api.ts`. Board renders immediately; AI scores overlay asynchronously.
Tradeoff: two requests, slightly more complex `board.api.ts`.

**Option C — Three separate endpoints**
`GET /api/board` → core candidates + `isGloPros`.
`GET /api/negotiations?vacancyId=X` → negotiation notes keyed by `candidateId`.
`GET /api/ai-matches?vacancyId=X` → AI breakdown keyed by `candidateId`.
Tradeoff: maximum service separation; three requests; `board.api.ts` orchestrates.

**Used for this build:** Option A — `Candidate` in `api.types.ts` includes all fields; mock provides them all. Switching to B or C later only requires updating `board.api.ts`, not any component.

---

## Dependencies to Install

```
# Runtime — Tailwind v4
tailwindcss @tailwindcss/vite

# Runtime — utilities
clsx tailwind-merge class-variance-authority

# Runtime — DnD
@dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

# Dev — testing
vitest @testing-library/react @testing-library/jest-dom
@testing-library/user-event jsdom @vitest/coverage-v8

# Dev — formatting
prettier prettier-plugin-tailwindcss
```

---

## `api.types.ts` Additions

New interface:
```ts
/** Per-category AI match breakdown. Provided by AI scoring service; aggregated into BoardResponse. */
export interface AiMatchBreakdown {
  experience: number;   // 0–100
  skills: number;
  rate: number;
  location: number;     // 0 = no match, 100 = exact match
  availability: number;
  industry: number;
}
```

Add to `Candidate`:
```ts
/** True if the candidate is a registered GloPros platform professional. */
isGloPros: boolean;
/** Recruiter-authored note from the vacancy-candidate negotiation; absent if not negotiated. */
negotiationNote?: string;
/** Per-category AI breakdown. Absent for candidates not yet scored against this vacancy. */
aiMatchBreakdown?: AiMatchBreakdown;
/** Offer acceptance — set when stage transitions to 'hired'. */
hiredAt?: string;       // ISO 8601
hiredBy?: string;       // recruiter name
/** Decline info — set when stage transitions to 'not_proceeding'. */
declinedAt?: string;    // ISO 8601
declinedBy?: string;
declineReason?: string;
```

---

## Styling Setup

### `src/index.css`
Full `@theme inline` block from `.claude/design/theme.css` PLUS kanban-specific tokens:

```css
@import "tailwindcss";

:root {
  /* (all variables from theme.css) */

  /* Kanban tokens */
  --kanban-col-w: 280px;
  --kanban-col-gap: 14px;
  --col-bg: #f2f4f7;

  /* Column badge colors */
  --badge-applications: #00a6f4;
  --badge-under-review: #6366f1;
  --badge-first-interview: #00bcff;
  --badge-contract-offer: #f59e0b;
  --badge-hired: #22c55e;
  --badge-not-proceeding: #ef4444;
}

@theme inline {
  /* (all @theme entries from theme.css) */
  --color-badge-applications: var(--badge-applications);
  /* ... etc */
  --width-kanban-col: var(--kanban-col-w);
}
```

`style={{}}` used only for `ScoreCircle` SVG `strokeDasharray` (runtime-computed, documented with inline comment).

---

## CLAUDE.md Updates

**`src/styles/CLAUDE.md`** — update token rule: reference `@theme inline` in `src/index.css` instead of `tailwind.config.ts` (Tailwind v4, no config file).

**`src/components/CLAUDE.md`** — add:
- Atomic UI components live in `src/components/ui/`
- Domain components live in `src/components/candidate/`, `src/components/board/`, and `src/components/layout/`
- `CandidateCard` receives `stage: PipelineStage`; column-specific rendering is inside `CandidateCard` only — never create stage-specific card files

---

## Layout Structure

```
┌──────────────────────────────────────────────────────────────┐
│ NavigationSidebar (expandable) │ Right content block         │
│                                │                              │
│  [G]  logo                     │ ┌── VacancyCard ──────────┐ │
│       nav items                │ │ CN00001 · UX/UI Designer │ │
│       (icon-only collapsed;    │ │ status / type / dates    │ │
│        icon+label expanded)    │ └──────────────────────────┘ │
│                                │                              │
│                                │ ┌── ViewOptionsPanel ─────┐ │
│                                │ │ [Vacancy overview] [AI]  │ │
│                                │ │ [Candidates 30] ←active  │ │
│                                │ └──────────────────────────┘ │
│                                │                              │
│                                │ ┌── SearchBar ────────────┐ │
│                                │ │ 🔍 Search  [Filters]     │ │
│                                │ │ [☆ Shortlisted]  [+ Add] │ │
│                                │ └──────────────────────────┘ │
│                                │                              │
│                                │ ┌── KanbanBoard ──────────┐ │
│                                │ │ scrollable columns       │ │
│                                │ └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

State ownership: search query + shortlist toggle live in `layout.main.tsx`; passed as props to `SearchBar`, `ViewOptionsPanel`, and `KanbanBoard`.

---

## File Structure

```
src/
  assets/
    icons.ts              ← SVG path literals (from .claude/design/svg-veygbnptro.ts)

  api/
    api.constants.ts      ← BASE_URL, BOARD_PATHS, CANDIDATE_PATHS
    api.errors.ts         ← ApiError class
    board.api.ts          ← getBoardData(): Promise<BoardResponse>
    candidates.api.ts     ← updateCandidate(id, req): Promise<Candidate>

  types/
    api.types.ts          ← (existing + AiMatchBreakdown + extended Candidate)
    design.types.ts       ← (existing, reference only)

  utils/
    cn.ts                 ← cn() = clsx + tailwind-merge
    string.ts             ← nameInitials(), avatarPalette()
    candidate.ts          ← formatRate(), daysAgoLabel(), stageLabel()
    localStorage.ts       ← getLocalStorage<T>(), setLocalStorage<T>(), removeLocalStorage()

  hooks/
    useBoardState.ts      ← fetch, state, moveCandidate, localStorage sync
    useSearch.ts          ← query, setQuery, filteredCandidates (derived)
    useShortlistFilter.ts ← showOnlyShortlisted, toggle, filteredCandidates (derived)

  components/
    ui/                   ← Atomic, zero domain knowledge
      Avatar/
      SkillChip/
      ScoreCircle/
      ColumnBadge/
      Pill/

    candidate/            ← Composed from ui/ + api types; no state
      ProfileHeader/      ← variant='applications'|'full'
      AvailabilityTags/
      SkillsRow/
      CompensationSummary/
      AiMatchBreakdown/
      HiredNotice/
      DeclinedNotice/
      RecruiterBadge/
      CandidateCard/      ← stage prop drives all conditional rendering

    board/
      KanbanColumn/       ← droppable; header + card list
      KanbanBoard/        ← DnD context; receives filtered candidates as prop

    layout/
      NavigationSidebar/  ← expandable left rail; local isExpanded state
      VacancyCard/        ← vacancy metadata display; no state
      ViewOptionsPanel/   ← 3 options; "Candidates N" active; others disabled
      SearchBar/          ← search input, shortlist toggle, filter btn (dummy), add btn (dummy)
      layout.main.tsx     ← layout orchestrator; owns search + shortlist state

  App.tsx                 ← ErrorBoundary only; renders layout.main
  main.tsx                ← createRoot (unchanged)
  index.css               ← Tailwind v4 directives + @theme inline tokens

public/
  api/
    board.json            ← Static mock BoardResponse (30 candidates, 5 per stage)
```

---

## Component Props Reference

### Atoms (`src/components/ui/`)

```ts
interface AvatarProps { name: string; avatarUrl?: string; isGloPros: boolean; size?: 'sm' | 'md' }
interface SkillChipProps { label: string }
interface ScoreCircleProps { score: number }  // 0–100
interface ColumnBadgeProps { stage: PipelineStage }
interface PillProps { children: ReactNode; className?: string }
```

### Candidate components (`src/components/candidate/`)

```ts
interface ProfileHeaderProps { candidate: Candidate; variant: 'applications' | 'full' }
interface AvailabilityTagsProps { availability: CandidateAvailability; negotiationNote?: string }
interface SkillsRowProps { skills: Skill[]; visibleCount: number; postedAt: string }
interface CompensationSummaryProps { compensation: CandidateCompensation }
interface AiMatchBreakdownProps { breakdown: AiMatchBreakdown }
interface HiredNoticeProps { hiredAt: string; hiredBy: string }
interface DeclinedNoticeProps { reason: string; declinedBy: string; declinedAt: string }
// RecruiterBadge — no props
interface CandidateCardProps { candidate: Candidate; stage: PipelineStage }
```

### Layout components (`src/components/layout/`)

```ts
interface NavigationSidebarProps { /* no external props — manages isExpanded internally */ }

interface VacancyCardProps { vacancy: Vacancy }

interface ViewOptionsPanelProps {
  candidateCount: number;        // total visible (post-filter)
  // "Vacancy overview" + "AI search" are disabled dummies; "Candidates" is always active
}

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
  showOnlyShortlisted: boolean;
  onToggleShortlisted: () => void;
  // Filter button + Add candidate button are dummies (onClick = noop)
}
```

### Board components (`src/components/board/`)

```ts
interface KanbanColumnProps { stage: PipelineStage; candidates: Candidate[] }
interface KanbanBoardProps { candidates: Candidate[]; onMoveCandidate: (id: string, stage: PipelineStage) => void }
```

---

## `src/utils/localStorage.ts`

```ts
export function getLocalStorage<T>(key: string, fallback: T): T
export function setLocalStorage<T>(key: string, value: T): void
export function removeLocalStorage(key: string): void
```

All three are pure wrappers — no business logic. `useBoardState` uses these for stage persistence.

---

## Data Flow

`App.tsx` is thin: `ErrorBoundary` only. All hooks and state live in `layout.main.tsx` to keep prop drilling ≤ 2 levels deep (per `src/components/CLAUDE.md`).

```
App
 └── ErrorBoundary
      └── layout.main  ← calls all hooks; owns all state
           │  useBoardState() → { board, moveCandidate, isLoading, error }
           │  useSearch({ candidates }) → { query, setQuery, filtered }
           │  useShortlistFilter({ candidates: filtered }) → { showOnly, toggle, finalList }
           │
           ├── NavigationSidebar (no props)
           ├── VacancyCard ({ vacancy })
           ├── ViewOptionsPanel ({ candidateCount: finalList.length })
           ├── SearchBar ({ query, onQueryChange, showOnlyShortlisted, onToggleShortlisted })
           └── KanbanBoard ({ candidates: finalList, onMoveCandidate })
                └── KanbanColumn × 6 ({ stage, candidates })
                     └── CandidateCard × N ({ candidate, stage })
```

DnD `onDragEnd` → `moveCandidate(id, newStage)`:
1. Optimistic local state update
2. `PATCH /api/candidates/:id`
3. `setLocalStorage('board-candidates', updatedCandidates)` on success; rollback on error

---

## Mock Data (`public/api/board.json`)

30 candidates (5 per stage) + 1 vacancy. Distribution:

| Stage | Notes |
|---|---|
| applications | 5 candidates; 2 with `aiMatchBreakdown`, 3 without; mix of `isGloPros` |
| under_review | 5 candidates; `RecruiterBadge` shown; 2 `isGloPros: true` |
| first_interview | 5 candidates; `RecruiterBadge` shown; 1+ with `negotiationNote` |
| contract_offer | 5 candidates; 2+ with `negotiationNote`; mix of shortlisted |
| hired | 5 candidates; all have `hiredAt` + `hiredBy` |
| not_proceeding | 5 candidates; all have `declinedAt` + `declinedBy` + `declineReason` |

---

## Implementation Order

1. Install dependencies; update `vite.config.ts` (Tailwind v4 plugin + proxy)
2. Update `src/index.css` — `@tailwindcss` directives + `@theme inline` tokens
3. Copy icon paths → `src/assets/icons.ts`
4. Update `api.types.ts` — add `AiMatchBreakdown`, extend `Candidate`
5. Write `public/api/board.json` — 30 candidates
6. `src/utils/cn.ts`, `src/utils/string.ts`, `src/utils/candidate.ts`, `src/utils/localStorage.ts`
7. API layer: `api.constants.ts` → `api.errors.ts` → `board.api.ts` → `candidates.api.ts`
8. Configure vitest; set up `src/__tests__/setup.ts`
9. Atom UI components: `Avatar`, `SkillChip`, `ScoreCircle`, `ColumnBadge`, `Pill`
10. Candidate sub-components: `ProfileHeader`, `AvailabilityTags`, `SkillsRow`, `CompensationSummary`, `AiMatchBreakdown`, `HiredNotice`, `DeclinedNotice`, `RecruiterBadge`
11. `CandidateCard`
12. `KanbanColumn` (droppable)
13. Hooks: `useBoardState`, `useSearch`, `useShortlistFilter`
14. `KanbanBoard` (DnD context)
15. Layout components: `NavigationSidebar`, `VacancyCard`, `ViewOptionsPanel`, `SearchBar`
16. `layout.main.tsx` — assembles all layout pieces; calls all hooks; owns all state
17. Rewrite `App.tsx` — `ErrorBoundary` only; renders `layout.main`
18. Tests: search filter, shortlist filter, board reducer/state, column count accuracy
19. CLAUDE.md updates for `src/components/` and `src/styles/`

---

## Verification

- `npm run dev` → full layout renders (sidebar + vacancy card + tabs + search bar + 6-column board with 30 cards)
- Navigation sidebar collapses and expands
- Drag card → count updates immediately; stage persists on page refresh (localStorage)
- Search by partial name → real-time filter across all columns
- Shortlist toggle → shows only `isShortlisted: true` candidates; `ViewOptionsPanel` count updates
- `npm test` → all suites pass (search, shortlist, board reducer, column counts)
- `npm run build` → zero TypeScript errors
- Vite proxy serves `/api/board` from `public/api/board.json` → e2e data flow exercised
