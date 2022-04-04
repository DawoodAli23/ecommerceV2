import React from "react";
import Nav from "./Nav";
import Container from "./Container";
function Signup() {
  return (
    <div className=" flex flex-col text-xs space-y-10 md:space-y-56 w-100 min-h-screen bg-[url('https://images.wallpaperscraft.com/image/single/forest_fog_dark_152252_1920x1080.jpg')]">
      <Nav />
      <Container />
    </div>
  );
}

export default Signup;
