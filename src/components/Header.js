import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute shadow bg-gradient-to-b from-black  w-screen z-10 flex justify-between">
      <img
        className="w-40  ms-[90px] "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />

      <button className="mx-5 text-white font-bold" onClick={handleSignOut}>
        sign out
      </button>
    </div>
  );
};

export default Header;
