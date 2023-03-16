import React from 'react'
import { useQuery } from 'react-query'
import { getBooks } from '../api/routes'
import { BookData } from '../models/Book'

const BookList = () => {
  const { isLoading, error, data } = useQuery('repoData', getBooks)

  if (isLoading) return <p>'Loading...'</p>

  if (error) return <p>An error has occurred</p>

  return (
    <ul>
      {data.map((book: BookData) => {
        return <li key={book.name + Math.random().toString()}>{book.name}</li>
      })}
    </ul>
  )
}

export default BookList
