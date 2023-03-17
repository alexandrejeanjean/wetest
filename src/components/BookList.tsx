import React from 'react'
import { useQuery } from 'react-query'
import { getBooks } from '../api/routes'
import { BookData } from '../models/Book'
import { Link, useNavigate } from 'react-router-dom'

const BookList = () => {
  const { isLoading, error, data } = useQuery('repoData', getBooks)

  const navigate = useNavigate()

  console.log('data', data)

  if (isLoading) return <p>'Loading...'</p>

  if (error) return <p>An error has occurred</p>

  return (
    <div className='flex flex-col items-center justify-center overflow-hidden background'>
      <button
        className='absolute text-4xl tracking-widest text-white text-opacity-25 uppercase transition duration-500 ease-in-out left-2 top-2 hover:text-opacity-75'
        onClick={() => navigate(-1)}
      >
        &#x2190; Back
      </button>
      <h1 className='absolute bottom-0 tracking-widest text-white text-opacity-25 uppercase left-6 text-8xl '>
        Game of Thrones <br />
        book list
      </h1>
      <ul className='grid grid-cols-1 gap-12 px-4 py-6 overflow-scroll max-h-[600px] md:grid-cols-2 lg:grid-cols-4'>
        {data.map((book: BookData) => {
          const releasedDate = new Date(book.released)
            .toISOString()
            .substring(0, 4)
          const bookUri = book.name.toLowerCase().replace(/\s/g, '-')

          return (
            <li key={book.isbn} className='p-6 bg-white/75 hover:bg-white'>
              <Link
                className='flex flex-col text-black'
                to={bookUri}
                state={{ book }}
              >
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
        })}
      </ul>
    </div>
  )
}

export default BookList
