import { MainLayout } from './components/layout/layout.main'

import { ErrorBoundary } from './components/layout/ErrorBoundery'

export default function App() {
  return (
    <ErrorBoundary>
      <MainLayout />
    </ErrorBoundary>
  )
}
