import React, { useEffect, useState } from "react";
import { OPTIONS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const [trailerId, setTrailerId] = useState(null);

  const dispatch = useDispatch();

  const getMovieVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      OPTIONS_API
    );
    const json = await data.json();
    const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    
    setTrailerId(trailer.key);
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    getMovieVedio();
  }, []);

  return (
    <div className="w-screen ">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
