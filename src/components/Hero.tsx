import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2 shrink-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-cyan-400 to-violet-500">
            <motion.img 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src="https://github.com/AnkitMaurya0.png" 
              alt="Ankit Kumar" 
              className="w-full h-full object-cover rounded-full border-4 border-[#0f172a]"
            />
          </div>
        </motion.div>

        <div className="order-2 md:order-1 text-center md:text-left flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Ankit <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Kumar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl text-gray-300 font-medium mb-8">
              Aspiring AI & Machine Learning Engineer
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
              Passionate about building real-world AI solutions and continuously enhancing problem-solving and analytical skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:scale-105 transition-transform w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
