import React from 'react'
import { useLocation } from 'react-router-dom'
import NotFound from './404'
import CharacterList from './CharacterList'
import PageTemplate from './PageTemplate'

const Book = () => {
  let { state } = useLocation()

  if (!state) return <NotFound />

  let { book } = state

  return (
    <PageTemplate title={book.name + ' characters'}>
      <CharacterList characters={book.characters} />
    </PageTemplate>
  )
}

export default Book
