import React from 'react'
import { getCharacterInfos } from '../api/routes'
import { useQueries } from 'react-query'
import { Character } from './Character'

interface CharactersListProps {
  characters: string[]
}

const CharacterList: React.FC<CharactersListProps> = ({ characters }) => {
  const charactersQueries = useQueries(
    characters.slice(1, 3).map((characterEndpoint) => {
      return {
        queryKey: ['character', characterEndpoint],
        queryFn: () => getCharacterInfos(characterEndpoint),
      }
    })
  )

  return (
    <ul>
      {charactersQueries.map((result) => {
        if (result.isLoading) return <li>loading...</li>
        if (result.error) return <li>An error occured</li>
        return (
          <li key={result.data.url}>
            <Character character={result.data} />
          </li>
        )
      })}
    </ul>
  )
}

export default CharacterList
