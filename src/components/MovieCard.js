import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-52 p-2 flex'>
        <img src={IMG_CDN_URL+poster_path} alt="moviecard" />
    </div>
  )
}

export default MovieCard