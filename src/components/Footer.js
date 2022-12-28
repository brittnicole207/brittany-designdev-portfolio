import React from "react";
import "tailwindcss/tailwind.css";

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
        <a href="https://github.com/brittnicole207">
          <FaGithub alt="Outline of Github Logo" />
        </a>
        <a href="https://www.linkedin.com/in/brittanyblalock/">
          <FaLinkedin alt="Outline of Linkedin Logo" />
        </a>
        <a href="ADD EMAIL ICON">
          <FaEnvelope alt="Email Icon" />
        </a>
      </div>
    </footer>
  );
}
