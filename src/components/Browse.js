import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useAddMovies from '../hooks/useAddMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {
  useAddMovies(); // custom hook to fetch movies from tmdb server
  
  const gptSearch=useSelector(store=>store.gpt.showGptSearch);
  
  return (
    <div>
      <Header/>
      {
        gptSearch? 
        <GptSearch/>:
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
      
    </div>
  )
}

export default Browse