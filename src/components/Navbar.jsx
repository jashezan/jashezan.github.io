import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "skills" },
    { id: 4, name: "projects" },
    { id: 5, name: "contact" },
  ];
  return (
    <nav className="bg-black bg-opacity-95 backdrop-blur-lg text-white w-full h-20 px-5 flex justify-between items-center top-0 fixed md:px-20 z-50">
      <div>
        <h2 className="text-5xl font-signature cursor-pointer"><Link to="home" smooth>Shezan</Link></h2>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <Link to={link.name} smooth key={link.id}>
              <li className="px-4 cursor-pointer text-sm lg:text-xl text-gray-400 capitalize font-semibold duration-200 hover:scale-105 hover:text-gray-200">
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div
        className="cursor-pointer ml-4 text-gray-400 z-10 md:hidden"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 lg:hidden">
          {links.map((link) => {
            return (
              <Link to={link.name} smooth key={link.id}>
                <li
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl duration-200 hover:bg-gray-700"
                >
                  {link.name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
