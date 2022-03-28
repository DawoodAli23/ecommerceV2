import React from "react";

function Nav() {
  return (
    <div>
      <nav className="h-7 bg-gradient-to-r from-cyan-500 to-blue-500">
        <ul className="flex flex-row space-x-16">
          <a class="relative" href="">
            Logo
          </a>
          <a class="relative group tracking-widest" href="">
            Home
            <div class="absolute w-full h-0.5 bg-white scale-x-0  group-hover:scale-x-100 transition-transform"></div>
          </a>
          <a class="relative group tracking-widest" href="">
            About
            <div class="absolute w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
