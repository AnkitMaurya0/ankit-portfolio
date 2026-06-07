import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificationsData = [
  {
    title: 'PCAP: Programming Essentials in Python',
    issuer: 'Cisco (OpenEDG)',
  },
  {
    title: 'IT Essentials & Cybersecurity',
    issuer: 'Cisco Networking Academy',
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 lg:px-16 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/40 transition-colors">
                <FaCertificate className="text-xl text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
