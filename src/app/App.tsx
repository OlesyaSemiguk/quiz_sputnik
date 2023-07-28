import ErrorBoundary from 'components/ErrorBoundary'
import AppRouter from 'routing/AppRouter'

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}
