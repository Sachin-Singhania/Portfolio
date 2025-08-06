import { useState } from "react";
import Profile from "./../assets/profile.jpg" 
import { FaBars, FaTimes } from "react-icons/fa"; 

export function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 md:px-12 lg:px-16 relative">
        <div className="text-2xl font-bold">&lt; Sachin /	&gt;</div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-800 md:bg-transparent p-8 md:p-0 transition-transform duration-300 ${
            isMenuOpen ? "block z-10" : "hidden"
          } md:flex`}
        >
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Portfolio
          </a>
          <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 md:px-6 lg:px-8">
            <a href="#contact">
            Contact
            </a>
          </button>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 md:px-12 lg:px-16">
        <div className="space-y-8 md:mr-12 lg:mr-16">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            I'm a Full Stack Software Developer.
          </h1>
          <button className="px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-600 md:px-8 lg:px-10">
            <a href="#projects">Featured Projects</a>
          </button>
        </div>
        <div className="relative mb-8 md:mb-0">
          <div className="p-8 border-customBorder border-4 rounded-lg md:p-12 lg:p-16">
            <img
              src={Profile}
              alt="Profile"
              className="w-full aspect-square rounded-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
            />
            <div className="mt-4 space-y-2 md:mt-6 lg:mt-8">
              <p>2nd Year BCA Student | Full Stack Nextjs & MERN Developer</p>
              <div className="flex justify-between">
                <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 md:px-6 lg:px-8">
                  <a href="#contact">
                  Hire Me
                  </a>
                </button>
                <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 md:px-6 lg:px-8">
                  <a href="src/assets/Sachin Resume.pdf" download>
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function Contact(){
  return (
    <div id="contact" className="px-8 py-16 bg-[#1E2030] md:px-12 lg:px-16">
    <h2 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl">Contact Us</h2>
    <div className="max-w-md mx-auto">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#0B0D17] text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}
