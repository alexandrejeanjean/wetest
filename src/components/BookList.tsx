import React from 'react'
import { useQuery } from 'react-query'
import { getBooks } from '../api/routes'
import { BookData } from '../models/Book'
import { Link } from 'react-router-dom'

const BookList = () => {
  const { isLoading, error, data } = useQuery('repoData', getBooks)

  if (isLoading) return <p>'Loading...'</p>

  if (error) return <p>An error has occurred</p>

  return (
    <ul>
      {data.map((book: BookData) => {
        return (
          <li key={book.isbn}>
            <Link to={book.name} state={{ book }}>
              {book.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default BookList
