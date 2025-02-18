import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({id}) => {

  useMovieTrailer(id); // custom hook

  const trailer=useSelector(store=>store.movies.trailer);
  return (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground