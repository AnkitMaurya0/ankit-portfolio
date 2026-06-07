import React from 'react';
import AiWidget from './AiWidget';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass p-8 md:p-12 text-lg text-gray-300 leading-relaxed text-center lg:text-left h-full flex flex-col justify-center">
            <p>
              I am an aspiring AI & Machine Learning Engineer with strong foundations in Python, Java, Data Structures & Algorithms, 
              Machine Learning, and Software Development. I have experience in developing web applications and machine learning projects 
              using Flask, Streamlit, Pandas, and Scikit-Learn.
            </p>
            <p className="mt-4">
              I am passionate about building real-world AI solutions and continuously enhancing my problem-solving and analytical skills 
              to stay at the forefront of innovation.
            </p>
          </div>
          
          <div className="h-full flex items-center justify-center">
            <AiWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
