import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className='container'>
      <button className='button' onClick={() => navigate('/books')}>
        Enter
      </button>
    </div>
  )
}

export default Home
