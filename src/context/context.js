import React, { useEffect, useState } from 'react'
import mockUser from './mockdata/mockUser'
import mockRepos from './mockdata/mockRepos'
import mockFollowers from './mockdata/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  // request loading
  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  // error
  const [error, setError] = useState({ show: false, msg: '' })

  const searchGithubUser = async user => {
    toggleError()
    // setLoading(true)
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch(error => console.log(error))

    if (response) {
      setGithubUser(response.data)
    } else {
      toggleError(true, 'There is no user with that username')
    }
  }

  // check rate
  const checkRequests = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setRequests(remaining)
        if (remaining === 0) {
          toggleError(true, 'Sorry, you have exceeded your hourly rate limit!!')
        }
      })
      .catch(error => console.log(error))
  }
  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }
  // error
  useEffect(checkRequests, [])
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
