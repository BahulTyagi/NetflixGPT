import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  
  const movies=useSelector(store=>store.movies.movies)
  
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies}/>
      <MovieList title={"Trending"} movies={movies}/>
      <MovieList title={"Horror"} movies={movies}/>
      <MovieList title={"Comedy"} movies={movies}/>
      <MovieList title={"Now Playing"} movies={movies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer