import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
//import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  FaLinkedin,
  FaEnvelope,
  FaJs,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiTailwindcss,
} from "react-icons/si";
import Headshot from "../images/headshot.png";
//import PasswordGen from "../images/password-gen.png";
import Tournimate from "../images/tournimate2.png";
import bootcampFitness from "../images/bootcampFitness2.png";
//import WebDesign from "../images/web-design.png";
import UiDesign from "../images/uidesign.png";

export default function Home() {
  //const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="px-10 bg-gray-900 md:px-20 lg:px-40">
      <header>
        {/*<nav>
          <div
            className="flex flex-col 
                    items-center justify-right margin-top:3px mb-18"
          >
            
          </div>
        </nav>*/}
      </header>
      <section className="min-h-screen">
        <div className="text-cent.er p-10">
          <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
            Brittany Blalock
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl text-white">
            Web Developer and Designer
          </h3>
          <button class="mt-8 bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </button>
          {/*<p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
              I design webpages that help your vision come to life.
            </p>*/}
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
          <a href="https://github.com/brittnicole207">
            <FaGithub alt="Outline of Github Logo" />
          </a>
          <a href="https://www.linkedin.com/in/brittanyblalock/">
            <FaLinkedin alt="Outline of Linkedin Logo" />
          </a>
          <a href="https://www.youtube.com/">
            <FaEnvelope alt="Email Icon" />
          </a>
        </div>

        <section>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={Headshot} alt="Headshot of Brittany Blalock" />
          </div>
        </section>

        {/*Introduction in text*/}
        <section>
          <div>
            <p className="text-2xl py-2 y-5 leading-8 text-gray-200">
              I recently completed a Full-Stack Coding Bootcamp. I made the
              switch from Learning and Development after discovering my passion
              for understanding software and creating usable apps. Additionally,
              I discovered West Coast Swing, an improv partner dance, and I am
              training to make it to pro-level.
            </p>
          </div>
        </section>
        {/*<div>
            <h3 className="mb-3 pb-8 text-5xl py-2font-medium text-teal-400 md:text-6xl">
              What I Do
            </h3>
          </div>*/}

        <div className="lg:flex gap-10">
          {/* Card 1 - Web Design */}

          <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
            <div className="flex items-baseline place-content-center">
              {/*<FaHtml5 size={70} alt="Outline of HTML" />
                <FaJs size={ 70 } alt="Outline of JavaScript" />*/}

              <IconContext.Provider value={{ color: "teal", size: 70 }}>
                <FaHtml5 />
                <FaJs />
                <FaCss3Alt />
                <FaBootstrap alt="Bootstrap Logo" />
              </IconContext.Provider>
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">
              Web Development & Code
            </h3>
            <p className="text-gray-800 py-1">HTML5</p>
            <p className="text-gray-800 py-1">CSS and Bootstrap</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">React</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
            <div className="flex items-baseline place-content-center">
              <IconContext.Provider value={{ color: "teal", size: 70 }}>
                <SiAdobexd alt="AdobeXD Logo" />
                <FaFigma alt="Figma Logo" />
                <SiTailwindcss alt="Tailwind Logo" />
              </IconContext.Provider>
            </div>

            <h3 className="text-lg font-medium pt-8">User Interface Design</h3>
            <p className="text-gray-800 py-1">Adobe XD</p>
            <p className="text-gray-800 py-1">Tailwind</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          {/* Card 3 - Design */}

          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
            <div className="flex items-baseline place-content-center">
              <IconContext.Provider value={{ color: "teal", size: 70 }}>
                <SiAdobeillustrator alt="Figma Logo" />
                <SiAdobephotoshop alt="Photoshop Logo" />
                <SiAdobeindesign alt="InDesign Logo" />
              </IconContext.Provider>
            </div>

            <h3 className="text-lg font-medium pt-8 pb-2">Graphic Design</h3>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">InDesign</p>
          </div>
        </div>

        {/* Card for Portfolio */}
        <section className="py-10">
          <div>
            <h3 className="mb-3 pb-8 text-5xl py-2font-medium text-teal-400 md:text-6xl">
              Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src={bootcampFitness}
                    alt="Bootcamp Fitness Login"
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Bootcamp Fitness
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class="mt-8 bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src={Tournimate}
                    alt="Tournimate Login"
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Tournimate
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
