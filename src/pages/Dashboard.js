import { useContext } from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import { GithubContext } from '../context/context'
import loadingImage from '../images/preloader.gif'

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext)
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='Its Loading' />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
