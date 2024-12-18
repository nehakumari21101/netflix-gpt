import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonChange = () => {
    // Validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    //Authentication
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShC7CDrniEZDUN1pO49xLMm1qPd_zd3smFdug0d0mk-_ZoDP40Hj8L5wKimQVCOeDSsr8&usqp=CAU",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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

      <form
        className="absolute bg-black text-center w-[350px] my-36 mx-auto right-0 left-0 p-5 h-[450px] bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-white text-left text-lg ms-[2rem] mt-5 mb-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2 p-2 w-64 rounded-sm bg-gray-800 text-white"
          />
        )}

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
        <button
          className="bg-red-600 text-white mt-5 mb-5 w-64 px-3 py-2 rounded-sm"
          onClick={handleButtonChange}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="pt-5 text-gray-500">
          <span className="">
            {isSignInForm ? "New to Netflix?" : "Already Registerd?"}
          </span>
          <span
            className="font-bold text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignInForm ? "Sign up now" : "Login now"}.
          </span>
          <br />
          {isSignInForm && (
            <span>
              This page is protected by Google reCAPTCH to ensure yiu're not a
              bot.
            </span>
          )}
          {isSignInForm && (
            <a href="#" className="text-blue-500">
              {" "}
              Learn more.
            </a>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
