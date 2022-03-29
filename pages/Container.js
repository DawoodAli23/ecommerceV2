import React from "react";
import { useState } from "react";

function Container() {
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [fname, setFname] = useState({ firstname: "", fstate: false });
  const [lname, setLname] = useState({ lastname: "", lstate: false });
  const [email, setEmail] = useState({ mail: "", estate: false });

  const handleChange = (value) => {
    setPass(value);
    console.log(pass);
  };
  const handleShow = () => {
    setShowPass(!showPass);
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
    <div>
      <cont className="flex flex-col w-2/5 px-5 py-5 text-white border-0 space-y-7 aspect-video ml-60">
        <p1>Something</p1>
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p1>
          Already have an account?
          <a href="" className="text-fuchsia-200">
            Login
          </a>
        </p1>
        <div className="flex flex-nowrap space-x-2.5">
          <label className="relative">
            <input
              name="First Name"
              type="text"
              minLength={3}
              className="h-8 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none "
              onChange={(e) => setname(e.target.value)}
              value={fname.firstname}
            />
            <span
              className={`absolute left-0 py-1 mx-3 duration-200 ${
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
              className="h-8 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none "
              onChange={(e) => setendname(e.target.value)}
              value={lname.lastname}
            />
            <span
              className={`absolute left-0 py-1 mx-3 duration-200 ${
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
            className="h-8 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none "
            type="email"
            onChange={(e) => setthemail(e.target.value)}
            value={email.mail}
          />
          <span
            className={`absolute left-0 py-1 mx-3 duration-200 ${
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
            className="h-8 px-3 duration-200 bg-gray-800 border-2 border-white border-opacity-50 rounded-lg outline-none "
            type={showPass ? "text" : "password"}
            value={pass}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button onClick={() => handleShow()}>show Password</button>

          <span
            className={`absolute left-0 py-1 mx-3 duration-200 ${
              pass.length
                ? "opacity-60 transform scale-75 -translate-x-4 -translate-y-6"
                : ""
            } input`}
          >
            Password
          </span>
        </label>
        <button className="h-10 bg-gray-800 rounded-md w-52 hover:scale-90">
          Create Account
        </button>
      </cont>
    </div>
  );
}

export default Container;
