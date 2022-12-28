import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
//import { BsFillMoonStarsFill } from "react-icons/bs";
import Headshot from "../images/headshot.png";
//import PasswordGen from "../images/password-gen.png";
//import WebDesign from "../images/web-design.png";
import UiDesign from "../images/uidesign.png";
import App from "./Contact.js";
//import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main className="px-10 bg-gray-900 md:px-20 lg:px-40">
      <div className="lg:flex gap-10">
        <header></header>
        <section className="min-h-screen">
          <div className="p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-400 md:text-6xl">
              Brittany Blalock
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-white">
              Web Developer and Designer
            </h3>
            <section>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
                <img src={Headshot} alt="Headshot of Brittany Blalock" />
              </div>
              <div className="my-10 align-content-right">
                <p className="text-2xl py-2 y-5 leading-8 text-gray-200">
                  I recently completed a Full-Stack Coding Bootcamp. I made the
                  switch from Learning and Development after discovering my
                  passion for understanding software and creating usable apps.
                  Additionally, I discovered West Coast Swing, an improv partner
                  dance, and I am training to make it to pro-level.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}