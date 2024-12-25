import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async() =>{
    // console.log(searchText.current.value);

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
  }

  return (
    <div className="m-[10%] flex justify-center  h-16 items-center ">
      <form action="" className="  bg-black  w-[75%] p-5" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].placeholder}
          className=" mx-2 w-[70%] h-11 pl-5"
        />
        <button className="bg-red-600 rounded-lg text-white text-bold w-[20%] h-11 ml-5" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;


