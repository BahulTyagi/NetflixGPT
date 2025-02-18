import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import useMovieTrailer from '../hooks/useMovieTrailer';

const MainContainer = () => {
    
  
    
    const movie=useSelector(store=>store.movies.movies);

    if(!movie) return null;

    console.log(movie[0]);
    const {title, overview, id}=movie[0];
    
  return (
    <>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground id={id}/>
    </>
  )
}

export default MainContainer