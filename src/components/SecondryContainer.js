import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black m-0 -mt-36 text-white'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondryContainer
