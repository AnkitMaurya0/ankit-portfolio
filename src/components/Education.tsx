import React from 'react';

const educationData = [
  {
    degree: 'Bachelor of Technology (Artificial Intelligence & Machine Learning)',
    institution: 'Chandigarh Engineering College, Jhanjeri',
    duration: '2025 – 2028',
    grade: '',
  },
  {
    degree: 'Diploma in Electronics Engineering',
    institution: 'Government Polytechnic, West Champaran',
    duration: '2022 – 2025',
    grade: 'CGPA: 8.44',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 lg:px-16 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="glass p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-l-violet-500">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-cyan-400 font-medium">{edu.institution}</p>
                {edu.grade && <p className="text-gray-400 text-sm mt-1">{edu.grade}</p>}
              </div>
              <div className="shrink-0 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium">
                {edu.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
