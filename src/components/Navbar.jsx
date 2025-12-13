import React from "react";
import NavbarBlock from "./shadcn-studio/navbar-component";

function Navbar() {
  const navigationData = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div>
      <NavbarBlock navigationData={navigationData} />
    </div>
  );
}

export default Navbar;
