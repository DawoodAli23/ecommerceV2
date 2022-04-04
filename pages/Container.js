import React from "react";
import { useState } from "react";

function Container() {
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [cshowPass, setCShowPass] = useState(false);
  const [fname, setFname] = useState({ firstname: "", fstate: false });
  const [lname, setLname] = useState({ lastname: "", lstate: false });
  const [email, setEmail] = useState({ mail: "", estate: false });

  const handleChange = (value) => {
    setPass(value);
    console.log(pass);
  };
  const handleCChange = (value) => {
    setCPass(value);
    console.log(pass);
  };
  const handleShow = () => {
    setShowPass(!showPass);
  };
  const handleCShow = () => {
    setCShowPass(!cshowPass);
  };
  const handleMouseDownPassword = () => {
    setShowPass(false);
  };
  const setname = (value) => {
    setFname({ firstname: value, fstate: false });
    console.log(fname);
  };
  const setendname = (value) => {
    setLname({ lastname: value, lstate: false });
    console.log(lname);
  };
  const setthemail = (value) => {
    setEmail({ mail: value, estate: false });
    console.log(email);
  };

  return (
    <div className="">
      <cont className="flex flex-col w-2/5 px-5 py-5 text-white border-0 space-y-7 aspect-video sm:ml-11 md:ml-20 lg:ml-30 xl:ml-40">
        <p1>Something</p1>
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p1>
          Already have an account?
          <a href="" className="text-fuchsia-200">
            &nbsp;Login
          </a>
        </p1>
        <div className="flex space-x-3 flex-nowrap">
          <label className="relative">
            <input
              name="First Name"
              type="text"
              minLength={3}
              className="h-10 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none w-28 md:w-36 lg:w-40 xl:w-48"
              onChange={(e) => setname(e.target.value)}
              value={fname.firstname}
            />
            <span
              className={`absolute left-0 top-1 py-1 mx-3 duration-200 ${
                fname.firstname.length
                  ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                  : ""
              } input`}
            >
              First Name
            </span>
          </label>
          <label className="relative">
            <input
              name="Last Name"
              type="text"
              minLength={3}
              className="h-10 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none w-28 md:w-36 lg:w-40 xl:w-48 "
              onChange={(e) => setendname(e.target.value)}
              value={lname.lastname}
            />
            <span
              className={`absolute left-0 top-1 py-1 mx-3 duration-200 ${
                lname.lastname.length
                  ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                  : ""
              } input`}
            >
              Last Name
            </span>
          </label>
        </div>
        <label className="relative">
          <input
            className="w-56 h-10 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none sm:w-52 md:w-64 lg:w-80 xl:w-96"
            type="email"
            onChange={(e) => setthemail(e.target.value)}
            value={email.mail}
          />
          <span
            className={`absolute left-0  top-2 mx-3 duration-200 ${
              email.mail.length
                ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                : ""
            } input`}
          >
            E-mail
          </span>
        </label>
        <label className="relative">
          <input
            className="relative h-10 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none w-36 md:w-40 xl:w-48 sm:w-36"
            type={showPass ? "text" : "password"}
            value={pass}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            className="absolute left-28 top-2 md:left-32 xl:left-40"
            onClick={() => handleShow()}
          >
            <div className="">
              {showPass ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clip-rule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          <span
            className={`absolute left-0 top-1 py-1 mx-3 duration-200 ${
              pass.length
                ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                : ""
            } input`}
          >
            Password
          </span>
        </label>
        <label className="relative">
          <input
            className="relative h-10 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none w-36 md:w-40 xl:w-48 sm:w-36"
            type={cshowPass ? "text" : "password"}
            value={cpass}
            onChange={(e) => handleCChange(e.target.value)}
          />
          <button
            className="absolute left-28 top-2 md:left-32 xl:left-40"
            onClick={() => handleCShow()}
          >
            <div className="">
              {cshowPass ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clip-rule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          <span
            className={`absolute left-0 top-1 py-1 mx-3 duration-200 ${
              cpass.length
                ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                : ""
            } input`}
          >
            Confirm
          </span>
        </label>

        <button className="h-8 bg-gray-800 rounded-md m-9 w-36 hover:scale-90 ">
          Create Account
        </button>
      </cont>
    </div>
  );
}

export default Container;
