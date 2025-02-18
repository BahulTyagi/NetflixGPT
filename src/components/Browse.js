import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useAddMovies from '../hooks/useAddMovies'

const Browse = () => {
  useAddMovies(); // custom hook to fetch movies from tmdb server
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse