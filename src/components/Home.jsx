import React from "react";
import TypeWriter from "typewriter-effect";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full md:h-screen backdrop-blur-lg">
      <div className="flex flex-col h-full max-w-screen-lg mx-auto items-center justify-center text-white md:px-5 md:flex-row">
        <div className="flex flex-col mx-5 items-center justify-center h-full md:items-start text-center md:text-left">
          <h1 className="text-4xl xl:text-7xl md:text-5xl font-bold pt-20 md:scroll-pt-20">
            Jubyer Ahmed Shezan
          </h1>
          <h2 className="text-2xl xl:text-3xl md:text-5xl font-normal">
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 80,
                strings: ["Making Ideas Come to Life Using Web Technology"],
              }}
            />
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl py-4 max-w-md">
            Jubyer Ahmed Shezan a.k.a. J.A. Shezan is a Full Stack Web Developer
            and Web Application Security Researcher.
          </p>
          <div>
            <Link to="contact" smooth>
              <button className="group inline-flex items-center px-10 py-4 border border-transparent font-semibold rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Contact Me &nbsp;
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://cdn.jsdelivr.net/gh/jashezan/public-resources/Images/developer/developer.jpg"
            alt="developer"
            className="m-5 mx-auto rounded-2xl w-full md:w-60 lg:w-64 xl:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
