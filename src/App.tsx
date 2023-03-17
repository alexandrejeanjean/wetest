import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Book from './components/Book'
import NotFound from './components/404'
import BookList from './components/BookList'
import Home from './components/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<BookList />} />
            <Route path='books/:bookName' element={<Book />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
