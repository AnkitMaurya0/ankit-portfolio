import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  features,
  liveLink,
  githubLink,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/50 via-violet-500/20 to-transparent group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="glass p-8 flex flex-col h-full rounded-2xl relative z-10 bg-[#0f172a]/90">
        <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-cyan-400 group-hover:to-violet-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white/80 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
