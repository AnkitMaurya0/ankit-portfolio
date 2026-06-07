import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiPandas, SiNumpy, SiScikitlearn, SiFlask, SiStreamlit, SiMysql, SiJupyter } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-400' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Pandas', icon: SiPandas, color: 'text-indigo-400' },
      { name: 'NumPy', icon: SiNumpy, color: 'text-blue-300' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-orange-400' },
      { name: 'Data Analysis', icon: null, color: 'text-gray-300' },
      { name: 'NLP', icon: null, color: 'text-gray-300' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
      { name: 'Flask', icon: SiFlask, color: 'text-white' },
      { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-400' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white' },
      { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-400' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors">
                    {skill.icon && <skill.icon className={`text-xl ${skill.color}`} />}
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 glass p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Core Subjects</h3>
            <div className="flex flex-wrap justify-center gap-3">
                {['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'].map((subject, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-sm font-medium">
                        {subject}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
