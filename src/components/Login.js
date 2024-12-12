import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonChange = () =>{
      const msg = checkValidData(email.current.value, password.current.value);
      console.log(msg);
      // console.log(email.current.value);
      // console.log(password.current.value);
      setErrorMessage(msg);
    }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
         className="bg-gradient-to-b from-black bg-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        
      </div>
      <div className="absolute text-white bg-black w-[100%] h-[710px] bg-opacity-60"></div>

      <form className="absolute bg-black text-center w-[350px] my-36 mx-auto right-0 left-0 p-5 h-[450px] bg-opacity-70" onSubmit={e=> e.preventDefault()}>

        <h1 className="font-bold text-white text-left text-lg ms-[2rem] mt-5 mb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="m-2 p-2 w-64 rounded-sm bg-gray-800"
        />}

        <input
        ref={email}
          type="text"
          placeholder="Email Address or phone number"
          className="m-2 p-2 w-64 rounded-sm bg-gray-800 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2 p-2 w-64 rounded-sm bg-gray-800 text-white"
        />
        <br />
        <p className="text-red-500 text-left mx-[40px]">{errorMessage}</p>
        <button className="bg-red-600 text-white mt-5 mb-5 w-64 px-3 py-2 rounded-sm"  onClick={handleButtonChange}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="pt-5 text-gray-500">
          <span className="" >{isSignInForm ? "New to Netflix?" : "Already Registerd?"}</span>
          <span className="font-bold text-white cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "Sign up now" : "Login now"}.</span>
          <br />
          {isSignInForm && <span>
            This page is protected by Google reCAPTCH to ensure yiu're not a
            bot.
          </span>}
          {isSignInForm && <a href="#" className="text-blue-500"> Learn more.</a>}
        </div>
      </form>
    </>
  );
};

export default Login;