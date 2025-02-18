import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/movieSlice';
const useMovieTrailer = (id) => {
    const dispatch=useDispatch();

    const getMovieVideos= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS);
        const json=await data.json();

        const filteredResult=json.results.filter(x=>x.type.toString().toLowerCase()=="trailer");
       
        const trailer=(filteredResult && filteredResult.length)? (filteredResult[0].key):(json.results[0].key);
        dispatch(addTrailer(trailer));
      }

    useEffect(()=>{
        getMovieVideos();
    },[]);
}

export default useMovieTrailer