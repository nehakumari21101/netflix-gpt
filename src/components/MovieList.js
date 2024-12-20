import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" mx-5">
      <h1 className="text-xl font-bold py-1">{title}</h1>
      <div className="flex overflow-hidden hover:overflow-x-scroll">
        <div className="flex pb-3">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
// no-scrollbar overflow-x-scroll