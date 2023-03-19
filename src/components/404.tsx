import React from 'react'
import GoBack from './GoBack'
import Title from './Title'

const NotFound = () => {
  return (
    <section className='background'>
      <GoBack />
      <Title title='404 not found' />
    </section>
  )
}

export default NotFound
