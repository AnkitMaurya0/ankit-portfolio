import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/50 border-t border-white/10 pt-12 pb-8 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        <div className="flex gap-6 mb-8 mt-4">
          <a href="https://github.com/AnkitMaurya0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-b1177a32/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Ankit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
