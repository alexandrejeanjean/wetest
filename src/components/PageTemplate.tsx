import React from 'react'
import GoBack from './GoBack'
import Title from './Title'

interface PageTemplateProps {
  title: string
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, children }) => {
  return (
    <section className='flex flex-col items-center justify-center overflow-hidden background'>
      <GoBack />
      <Title title={title} />
      {children}
    </section>
  )
}

export default PageTemplate
