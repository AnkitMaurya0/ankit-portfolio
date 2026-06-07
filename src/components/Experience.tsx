import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Machine Learning Intern',
    company: 'Future Interns',
    points: [
      'Worked with structured datasets using Python for analytical and problem-solving tasks.',
      'Performed data cleaning, preprocessing, and exploratory data analysis.',
      'Gained practical exposure to machine learning workflows and data-driven solutions.',
      'Strengthened analytical thinking and engineering problem-solving skills.',
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-8 border-l-4 border-l-cyan-400 rounded-r-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-cyan-400 font-medium mb-6 text-lg">{exp.company}</p>
              
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1.5 shrink-0">✦</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
