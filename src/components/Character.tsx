import React from 'react'
import { CharacterData } from '../models'

interface CharacterProps {
  character: CharacterData
}

export const Character: React.FC<CharacterProps> = ({ character }) => {
  return <p>{character.name === '' ? character.aliases : character.name}</p>
}
