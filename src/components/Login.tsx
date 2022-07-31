import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // const register = (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       //const user = userCredential.user;
  //       //console.log(user);
  //       navigate("/");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <Link to="/">
        <img
          className="my-[20px] object-contain w-[100px] mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="w-[300px] h-fit flex flex-col rounded-[5px] border border-gray-400 p-[20px]">
        <h1 className="font-[500] mb-[20px] text-3xl">Sign-In</h1>

        <form>
          <h5 className="mb-[5px]">E-Mail</h5>
          <input
            className="border border-gray-400 h-[30px] mb-[10px] bg-white w-[98%]"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="mb-[5px]">Password</h5>
          <input
            className="border border-gray-400 h-[30px] mb-[10px] bg-white w-[98%]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border b-color mt-[10px]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-[15px] text-[12px]">
          By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <Link to="/createAccount">
          <button className="rounded-[2px] w-full h-[30px] mt-[10px] border border-gray-600">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
