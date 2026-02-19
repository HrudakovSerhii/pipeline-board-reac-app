import { MainLayout } from './components/layout/layout.main'

import ErrorBoundary from './components/layout/VacancyCard/ErrorBoundary.tsx'

export default function App() {
  return (
    <ErrorBoundary>
      <MainLayout />
    </ErrorBoundary>
  )
}
