import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/movieSlice'

const Browse = () => {

  const dispatch=useDispatch();

 const getNowPlayingMovies= async()=>{
 const data= await fetch(
    "https://api.themoviedb.org/3/movie/changes?page=1",
    API_OPTIONS
  );
  const res=await data.json();
  console.log(res.results); // api calls may happen twice, it is because of strictMode set in app.js , but this wont happen in build command when we deploy our application
  dispatch(addMovies(res.results));
}

 useEffect(()=>{
  getNowPlayingMovies();
 },[])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse