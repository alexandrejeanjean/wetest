import React from 'react'

interface TitleProps {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className='absolute bottom-0 tracking-widest text-white text-opacity-25 uppercase left-6 text-8xl '>
      {title}
    </h1>
  )
}

export default Title
