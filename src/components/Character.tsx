import React from 'react'
import { CharacterData } from '../models'

interface CharacterProps {
  character: CharacterData
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const characterName =
    character.name === '' ? character.aliases : character.name
  return (
    <ul className='flex'>
      <div className='flex items-center justify-center w-24 h-24 mr-6 text-3xl text-white bg-gray-800 rounded-sm'>
        {character.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <li className='text-lg font-semibold text-black uppercase'>
          {characterName}
        </li>
        <li className='mb-4 font-medium text-gray-900 text-md'>
          {character.playedBy}
        </li>
        <li>Gender: {character.gender}</li>
        <li>Born: {character.born}</li>
        <li>Died: {character.died}</li>
      </div>
    </ul>
  )
}

export default Character
