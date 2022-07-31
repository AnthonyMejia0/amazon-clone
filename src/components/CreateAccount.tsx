import { ChevronRightIcon } from "@heroicons/react/solid";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/config";

function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const firstName = name.split(" ")[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: firstName,
        });

        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

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
        <h1 className="font-[500] mb-[20px] text-3xl">Create Your Account</h1>

        <form>
          <h5 className="mb-[5px]">Your Name</h5>
          <input
            className="border border-gray-400 h-[30px] mb-[10px] bg-white w-[98%]"
            type="text"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            onClick={register}
            className="bg-[#f0c14b] rounded-[2px] w-full h-[30px] border b-color mt-[10px]"
          >
            Continue
          </button>
        </form>

        <p className="mt-[15px] text-[12px]">
          By creating account, you agree to the AMAZON FAKE CLONE Conditions of
          Use and Privacy Notice.
        </p>

        <p className="flex mt-[20px] border-t border-t-gray-300 p-1 text-sm">
          Already have an account?
          <Link to="/login">
            <span className="ml-[5px] text-blue-600 flex items-center justify-center">
              Sign-In
              <ChevronRightIcon className="h-3 w-3 mt-[3px]" />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
