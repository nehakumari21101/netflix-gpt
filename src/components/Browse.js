import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondryContainer/>
      <div></div>
    </div>
  );
};

export default Browse;
