import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <button
      className='absolute text-4xl tracking-widest text-white text-opacity-25 uppercase transition duration-500 ease-in-out left-2 top-2 hover:text-opacity-75'
      onClick={() => navigate(-1)}
    >
      &#x2190; Back
    </button>
  )
}

export default GoBack
