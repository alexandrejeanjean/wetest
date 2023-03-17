import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import CharacterList from './CharacterList'

const Book = () => {
  let params = useParams()
  let { state } = useLocation()
  let { book } = state

  return (
    <>
      <h1>{params.bookName}</h1>
      <CharacterList characters={book.characters} />
    </>
  )
}

export default Book
