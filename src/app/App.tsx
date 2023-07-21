import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import AppRouter from 'routing/AppRouter'

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}
