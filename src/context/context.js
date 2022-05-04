import React from 'react'
import mockUser from './mockdata/mockUser'
import mockRepos from './mockdata/mockRepos'
import mockFollowers from './mockdata/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
