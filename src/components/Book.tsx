import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CharacterList from './CharacterList'

const Book = () => {
  const navigate = useNavigate()
  let { state } = useLocation()
  let { book } = state

  return (
    <div className='flex flex-col items-center justify-center background'>
      <button
        className='absolute text-4xl tracking-widest text-white text-opacity-25 uppercase transition duration-500 ease-in-out left-2 top-2 hover:text-opacity-75'
        onClick={() => navigate(-1)}
      >
        &#x2190; Back
      </button>
      <h1 className='absolute bottom-0 tracking-widest text-white text-opacity-25 uppercase left-6 text-8xl '>
        {book.name}
      </h1>
      <CharacterList characters={book.characters} />
    </div>
  )
}

export default Book
