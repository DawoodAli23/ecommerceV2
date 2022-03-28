import React from "react";

function Container() {
  return (
    <div>
      <cont class="flex flex-col space-y-7 aspect-video px-5 py-5 bg-indigo-300 w-2/5 ml-60">
        <p1>Something</p1>
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p1>
          Already have an account?<a href="">Login</a>
        </p1>
        <div class="flex flex-nowrap space-x-2.5">
          <label className="relative">
            <input
              name="First Name"
              type="text"
              minLength={3}
              className="px-3 duration-200 bg-gray-700 border-white border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-white trasition"
            />
            <span className="absolute left-0 mx-3 duration-200 input">
              First Name
            </span>
          </label>
          <label className="relative">
            <input
              name="Last Name"
              type="text"
              minLength={3}
              className="px-3 duration-200 bg-gray-700 border-white border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-white trasition"
            />
            <span className="absolute left-0 mx-3 duration-200 input">
              Last Name
            </span>
          </label>
        </div>
        <label className="relative">
          <input
            className="px-3 duration-200 bg-gray-700 border-white border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-white trasition "
            type="email"
          />
          <span className="absolute left-0 mx-3 duration-200 input">
            E-mail
          </span>
        </label>
        <label className="relative">
          <input
            className="px-3 duration-200 bg-gray-700 border-white border-opacity-50 rounded-lg outline-none focus:border-blue-500 focus:text-white trasition "
            type="password"
          />
          <span className="absolute left-0 mx-3 duration-200 input">
            password
          </span>
        </label>
        <button className="bg-indigo-500 rounded-md w-52">
          Create Account
        </button>
      </cont>
    </div>
  );
}

export default Container;
