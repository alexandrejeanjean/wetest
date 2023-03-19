import React from 'react'
import { Link } from 'react-router-dom'
import { BookData } from '../models'

interface BookCardProps {
  book: BookData
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const releasedDate = new Date(book.released).toISOString().substring(0, 4)
  const bookUri = book.name.toLowerCase().replace(/\s/g, '-')

  return (
    <li className='p-6 bg-white/75 hover:bg-white'>
      <Link className='flex flex-col text-black' to={bookUri} state={{ book }}>
        <span className='text-lg font-semibold text-black uppercase'>
          {book.name}
        </span>
        <span className='mb-4 font-medium text-gray-900 text-md'>
          {book.authors}
        </span>
        <span className='text-sm font-light text-black'>
          {book.numberOfPages} pages
        </span>
        <span className='text-sm font-light text-black'>
          Released in {releasedDate}
        </span>
      </Link>
    </li>
  )
}

export default BookCard
