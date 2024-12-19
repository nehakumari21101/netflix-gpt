import React, { useEffect } from "react";
import { OPTIONS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const VideoBackground = ({movieId}) => {
    console.log(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const dispatch = useDispatch();

  const getMovieVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1138194/videos?language=en-US",
      OPTIONS_API
    );
    const json = await data.json();
    const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    console.log(trailer);
    // console.log(json.results);
    // settrailerId(trailer.key);
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    getMovieVedio();
  }, []);

  return (
    <div className="w-screen">
      <iframe
      className="w-screen"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/kt0V2rpEouE" }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
