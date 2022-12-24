import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineGithub, AiFillYoutube } from "react-icons/ai";
import Headshot from "../images/headshot.png";
import PasswordGen from "../images/password-gen.png";
import Tournimate from "../images/tournimate.jpeg";
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
            <h1>Britt Made It Design</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1V4bokPF8SZwzIzUGsM0w-kU7fPInKWS0Sf37uYdVi7s/edit"
                >
                  Resume
                </a>
                {/*<a type="button" className="btn btn-primary" href={resume} download>Download Resume</a>*/}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
              Brittany Blalock
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-white">
              Designer and developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
              I design webpages that help your vision come to life.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <img
              src={AiOutlineGithub}
              href="https://github.com/brittnicole207"
            />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={Headshot} alt="Headshot of Brittany Blalock" />
          </div>
        </section>

        <section>
          <div>
            <p className="text-md py-2 y-5 leading-8 text-gray-200">
              {/* Add Details Here */}
            </p>
          </div>
        </section>

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
            <h3 className="text-lg font-medium pt-8">User Interface Design</h3>
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
            .
            <h3 className="mb-3 text-5xl py-2font-medium text-teal-400 md:text-6xl">
              Portfolio
            </h3>
          </div>

          {/* Container with Portfolio Projects */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* First Portfolio Project */}
            <div class="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
              <a href="https://blooming-forest-36438.herokuapp.com/">
                <img
                  class="rounded-t-lg"
                  src={BootcampFitness}
                  alt="Bootcamp Fitness Website"
                />
              </a>
              {/*<div class="p-5">
                <a href="google.com">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bootcamp Fitness
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Plan and track your workouts!
                </p>
              </div>*/}
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src={PasswordGen}
                  alt="Password Generator Website"
                />
              </a>
            </div>
            <div class="max-w-sm bg-white rounded-lg border shadow-md dark:bg-gray-800 border-gray-700">
              <a href="https://tournimate.herokuapp.com/">
                <img
                  class="rounded-t-lg"
                  src={Tournimate}
                  alt="Tournimate Website"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
