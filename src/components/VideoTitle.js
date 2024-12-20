import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12  mt-72 absolute text-white">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-2/5 py-3 ">{overview}</p>
      <button className="bg-white text-black p-2 px-8 text-xl hover:bg-opacity-80 rounded-lg mr-2">
        Video
      </button>
      <button className="bg-gray-500 text-white p-2 px-8 text-xl bg-opacity-50 rounded-lg">
        Info
      </button>
    </div>
  );
};

export default VideoTitle;
