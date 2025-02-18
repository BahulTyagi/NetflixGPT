import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  if(!movies) return null
    return (
    <div className='px-6'>
         <h1 className='text-white text-3xl font-bold py-4'>{title}</h1>
         <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies.map(x=> <MovieCard key={x.id} poster_path={x.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList