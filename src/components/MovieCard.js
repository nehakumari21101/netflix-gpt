import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="p-1">
      <div className="w-32">
        <img src={IMG_CDN_URL + posterPath} alt="movie card" />
      </div>
    </div>
  );
};

export default MovieCard;
