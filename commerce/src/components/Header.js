import React from "react";
import NavBar from "./NavBar";

function Header() {
  const navBarStyle = {
    height: "120px",
    backgroundColor: "#D7BFD4",
  };

  return <NavBar navBarStyle={navBarStyle} />;
}

export default Header;
