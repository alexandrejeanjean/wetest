import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className='flex items-center justify-center background-doors'>
      <button
        className='justify-center px-12 py-6 text-2xl tracking-[0.4rem] text-white uppercase border-4 bg-white/25 hover:bg-black/75 hover:border-black hover:text-white transition duration-500 ease-in-out'
        onClick={() => navigate('/books')}
      >
        Enter
      </button>
    </div>
  )
}

export default Home
