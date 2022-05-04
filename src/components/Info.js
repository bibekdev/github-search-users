import React, { useContext } from 'react'
import { GithubContext } from '../context/context'
import styled from 'styled-components'
// import { GoRepo, GoGist } from 'react-icons/go'
// import { FiUsers, FiUserPlus } from 'react-icons/fi'

const Info = () => {
  const data = useContext(GithubContext)

  return <div>Info : {data}</div>
}

export default Info
