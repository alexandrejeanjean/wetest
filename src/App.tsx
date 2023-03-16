import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './components/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  )
}

export default App
