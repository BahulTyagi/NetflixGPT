import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMovies } from '../utils/movieSlice';

const useAddMovies = () => {
  
    const dispatch=useDispatch();

    const getNowPlayingMovies= async()=>{
    const data= await fetch(
     //  "https://api.themoviedb.org/3/movie/changes?page=1",
       "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
       API_OPTIONS
     );
     const res=await data.json();
    // console.log(res.results);  api calls may happen twice, it is because of strictMode set in app.js , but this wont happen in build command when we deploy our application
     dispatch(addMovies(res.results));
   }
   
    useEffect(()=>{
     getNowPlayingMovies();
    },[])
}

export default useAddMovies