import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Headshot from '../images/headshot.jpeg';
import PasswordGen from '../images/password-gen.png';
import Tournimate from "../images/tournimate.jpeg";
import BootcampFitness from "../images/bootcampfitness.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header>
        <title>Brittany Blalock Portfolio</title>
        <meta name="description" content="Built by Brittany Blalock" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1>brittany design & development</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="www.google.com"
                >
                  Resume
                </a>

                {/*<a type="button" className="btn btn-primary" href={resume} download>Download Resume</a>*/}
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Brittany Blalock
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Designer and developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I create beautiful designs and webpages.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={Headshot} alt="Headshot of Brittany Blalock" />
          </div>
        </section>

        <section>
          <div>
            <p className="text-md py-2 y-5 leading-8 text-gray-800 dark:text-gray-200">
              I have had the pleasure of working and learning at University of
              Phoenix where I earned my Masters Degree in Adult Education and
              Training. I worked as an Instructional designer at a SaaS start-up
              company.
            </p>
          </div>

          {/* Card 1 - Design */}
          <div className="lg:flex gap-10">
            {/* Card 2 - Coding */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/*<Image src={design} width={100} height={100} />*/}
              <h3 className="text-lg font-medium pt-8 pb-2">
                Web Development & Code
              </h3>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS and Tailwind</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/*<Image src={design} width={100} height={100} />*/}
              <h3 className="text-lg font-medium pt-8">
                User Interface Design
              </h3>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
            {/* Card 3 - Design */}

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/*<Image src={design} width={100} height={100} />*/}
              <h3 className="text-lg font-medium pt-8 pb-2">Graphic Design</h3>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">InDesign</p>
            </div>
          </div>
        </section>

        {/* Card for Portfolio */}
        <section className="py-10">
          <div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Portfolio
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have done work in web development, software, coding, third-party
              API's. Below you will see some of my work.
            </p>
          </div>

          {/* Container with Portfolio Projects */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* First Portfolio Project */}
            <div className="basis-1/3 flex-1 ">
              {/*<h4 className="py-2 text-teal-600 font-medium dark:text-teal-400">
                Password Generator
              </h4>*/}
              <img
                className="object-cover w-full border"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={PasswordGen}
                alt="password-generator-screenshot"
              />
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Password Generator
              </p>
            </div>
            <div className="basis-1/3 flex-1 ">
              <h4 className="py-2 text-teal-600 font-medium dark:text-teal-400">
                {/*<a href="https://blooming-forest-36438.herokuapp.com/">
                  Bootcamp Fitness
                </a>*/}
              </h4>
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="Bootcamp Fitness logo"
                src={BootcampFitness}
              />
              <p className="text-md py-2 leading-8 dark:text-gray-200">
                Bootcamp Fitness
              </p>
            </div>
            <div className="basis-1/3 flex-1 ">
              {/*<h4 className="py-4 text-teal-600">TourniMate</h4>*/}
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="Tournimate logo"
                src={Tournimate}
              />
              <p className="text-gray-800 py-1">Tournimate</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
