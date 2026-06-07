import React from 'react';
import { FaTrophy, FaRobot, FaBrain, FaBookOpen, FaAmazon } from 'react-icons/fa';

const achievements = [
  {
    title: 'Machine Learning Projects',
    description: 'Developed and trained multiple models including recommendation systems and NLP tasks.',
    icon: FaBrain,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10'
  },
  {
    title: 'Robotics Projects',
    description: 'Built ESP32-based autonomous robots with sensor integration and real-time control.',
    icon: FaRobot,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
  {
    title: 'AI Product Search Engine Deployment',
    description: 'Successfully deployed a live Streamlit application with semantic search capabilities.',
    icon: FaTrophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    title: 'Open Source Learning',
    description: 'Continuous contributor to personal repositories, exploring new frameworks and tools.',
    icon: FaBookOpen,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'Amazon ML Summer School Applicant',
    description: 'Candidate for the prestigious Amazon ML Summer School program.',
    icon: FaAmazon,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 lg:px-16 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Highlights</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-colors group">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.bg}`}>
                <item.icon className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
