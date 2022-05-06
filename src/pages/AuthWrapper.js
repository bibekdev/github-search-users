import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loadingGif from '../images/preloader.gif'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt='spinner' />
      </Wrapper>
    )
  }
  if (error) {
    return <h2>Error: {error.message}</h2>
  }
  return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`

export default AuthWrapper
