import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10 ">
        <img
          className="bg-gradient-to-b from-black bg-black w-screen h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <div className="">
        {/* <h1>GPT search page.</h1> */}
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
