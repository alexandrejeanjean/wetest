import React from 'react'
import { getCharacterInfos } from '../api/routes'
import { useQueries } from 'react-query'
import { Character } from './Character'

interface CharactersListProps {
  characters: string[]
}

const CharacterList: React.FC<CharactersListProps> = ({ characters }) => {
  const charactersQueries = useQueries(
    characters.map((characterEndpoint) => {
      return {
        queryKey: ['character', characterEndpoint],
        queryFn: () => getCharacterInfos(characterEndpoint),
      }
    })
  )

  return (
    <ul className='grid grid-cols-1 gap-12 px-4 py-6 md:grid-cols-2 lg:grid-cols-3 overflow-scroll max-h-[600px]'>
      {charactersQueries.slice(0, 10).map((result) => {
        if (result.isLoading) return <li>loading...</li>
        if (result.error) return <li>An error occured</li>
        return (
          <li className='p-6 bg-white/75 ' key={result.data.url}>
            <Character character={result.data} />
          </li>
        )
      })}
    </ul>
  )
}

export default CharacterList
