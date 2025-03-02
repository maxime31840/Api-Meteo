import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";  

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-lg text-gray-400 mb-4">
          Made with ❤️ by <span className="text-blue-500">Maxime Lourdel</span> &copy; | 2025
        </p>
        
        {/* Liens sociaux */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/maxime31840" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/maximelourdel/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/lrdl_maxx/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Pour toute demande, Contactez-moi<a href="mailto:maxime.lourdel31@gmail.com" className="text-blue-400">  Ici</a></p>
        </div>
      </div>
    </div>
  );
}
