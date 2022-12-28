
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
    

export default function Skills() {
return (
<div className="lg:flex gap-10">
  {/* Card 1 - Web Design */}

  <div className="text-center items-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1">
    <div className="flex items-baseline place-content-center">
      <IconContext.Provider value={{ color: "teal", size: 70 }}>
        <FaHtml5 />
        <FaJs />
        <FaCss3Alt />
        <FaBootstrap alt="Bootstrap Logo" />
      </IconContext.Provider>
    </div>
    <h3 className="text-lg font-medium pt-8 pb-2">Web Development & Code</h3>
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
