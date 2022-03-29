import React from "react";

function Nav() {
  return (
    <div>
      <nav className="text-white h-7">
        <ul className="flex flex-row space-x-16">
          <a className="relative hover:scale-90" href="">
            Logo
          </a>
          <a className="relative tracking-widest group hover:scale-90" href="">
            Home
            <div className="absolute w-full h-0.5 bg-white scale-x-0  group-hover:scale-x-100 transition-transform"></div>
          </a>
          <a className="relative tracking-widest group hover:scale-90" href="">
            About
            <div className="absolute w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
