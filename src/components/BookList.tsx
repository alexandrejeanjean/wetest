import React from 'react'
import { useQuery } from 'react-query'
import { getBooks } from '../api/routes'
import { BookData } from '../models/Book'
import BookCard from './BookCard'
import PageTemplate from './PageTemplate'

const BookList = () => {
  const { isLoading, error, data } = useQuery('repoData', getBooks)

  const resultRender = () => {
    switch (true) {
      case isLoading:
        return <p className='text-white'>'Loading...'</p>

      case error:
        return <p className='text-white'>An error has occurred</p>

      default:
        return data.map((book: BookData) => (
          <BookCard key={book.isbn} book={book} />
        ))
    }
  }

  return (
    <PageTemplate title='Game of Thrones books'>
      <ul className='grid grid-cols-1 gap-12 px-4 py-6 overflow-scroll max-h-[600px] md:grid-cols-2 lg:grid-cols-4'>
        {resultRender()}
      </ul>
    </PageTemplate>
  )
}

export default BookList
