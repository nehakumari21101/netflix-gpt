import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("now", movies.nowPlayingMovies);
  console.log("upcoming", movies.upcomingMovies)
  return (
    <div className='bg-black m-0 -mt-36 text-white'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming "} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondryContainer
