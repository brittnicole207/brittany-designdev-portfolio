import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import Headshot from "../images/headshot.png";
import PasswordGen from "../images/password-gen.png";
import Tournimate from "../images/tournimate.png";
import BootcampFitness from "../images/bootcampfitness.png";
import WebDesign from "../images/web-design.png";
import UiDesign from "../images/uidesign.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <title>Brittany Blalock Portfolio</title>
        <meta name="description" content="Built by Brittany Blalock" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="px-10 bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-white">
            {/*<h1>Britt Made It Design</h1>*/}
            <ul className="flex items-right">
              {/*<li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>*/}
              <li className="flex items-right">
                {/*<a type="button" className="btn btn-primary" href={""} download>
                  Download Resume
                </a>*/}
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
              Brittany Blalock
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-white">
              Web Developer and Designer
            </h3>
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
              <FaYoutube alt="Outline of Youtube Logo" />
            </a>
          </div>

          <section>
            {/* Headshot */}
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <img src={Headshot} alt="Headshot of Brittany Blalock" />
            </div>
          </section>

          <div>
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full-center"
              href="https://docs.google.com/document/d/1V4bokPF8SZwzIzUGsM0w-kU7fPInKWS0Sf37uYdVi7s/edit"
              download
            >
              Download Resume
            </a>
          </div>

          {/*Introduction in text*/}
          <section>
            <div>
              <p className="text-xl py-2 y-5 leading-8 text-gray-200">
                I recently completed a Full-Stack Coding Bootcamp. I made the
                switch from Learning and Development after discovering my
                passion for understanding software and creating usable apps.
                Additionally, I discovered West Coast Swing, an improv partner
                dance, and I am training to make it to pro-level.
              </p>
            </div>
          </section>
          <div>
            <h3 className="mb-3 pb-8 text-5xl py-2font-medium text-teal-400 md:text-6xl">
              What I Do
            </h3>
          </div>

          <div className="lg:flex gap-10">
            {/* Card 1 - Web Design */}

            <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <img
                src={WebDesign}
                alt="Web Design"
                class="object-contain h-36 w-full"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web Development & Code
              </h3>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS and Tailwind</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              <img
                src={UiDesign}
                alt="Web Design"
                class="object-contain h-36 w-full"
              />
              <h3 className="text-lg font-medium pt-8">
                User Interface Design
              </h3>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
            {/* Card 3 - Design */}

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
              {/*<Image src={design} width={100} height={100} />*/}
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

            {/* Container with Portfolio Projects */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              {/* First Portfolio Project */}
              {/*<div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
              {/*<a href="https://blooming-forest-36438.herokuapp.com/">
                <img
                  class="rounded-t-lg"
                  src={BootcampFitness}
                  alt="Bootcamp Fitness Website"
                </a>*/}
              {/*</div>*/}
              {/*<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src={PasswordGen}
                  alt="Password Generator Website"
                />
              </a>
            </div>*/}
              {/*<div class="max-w-sm bg-white rounded-lg border shadow-md dark:bg-gray-800 border-gray-700">
              <a href="https://tournimate.herokuapp.com/">
                <img
                  class="rounded-t-lg"
                  src={Tournimate}
                  alt="Tournimate Website"
                />*/}
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
    </div>
  );
}
