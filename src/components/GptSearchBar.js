import React from "react";

const GptSearchBar = () => {
  return (
    <div className="m-[10%] flex justify-center  h-16 items-center ">
      <form action="" className="  bg-black  w-[75%] p-5">
        <input type="text" placeholder="What do you want to watch?" className=" mx-2 w-[70%] h-11 pl-5" />
        <button className="bg-red-600 rounded-lg text-white text-bold w-[20%] h-11 ml-5">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
