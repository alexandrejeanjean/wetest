import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './components/Home'
import { NotFound } from './components/404'
import Character from './components/Character'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='character/:characterId' element={<Character />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
