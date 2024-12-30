import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black -mt-10 sm:-mt-10 md:-mt-36 text-white'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming "} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondryContainer
