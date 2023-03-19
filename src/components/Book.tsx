import React from 'react'
import { useLocation } from 'react-router-dom'
import NotFound from './404'
import CharacterList from './CharacterList'
import GoBack from './GoBack'
import Title from './Title'

const Book = () => {
  let { state } = useLocation()

  if (!state) return <NotFound />

  let { book } = state

  return (
    <div className='flex flex-col items-center justify-center background'>
      <GoBack />
      <Title title={book.name + ' characters'} />
      <CharacterList characters={book.characters} />
    </div>
  )
}

export default Book
