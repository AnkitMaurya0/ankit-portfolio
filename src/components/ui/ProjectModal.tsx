import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    techStack: string[];
    features?: string[];
    liveLink?: string;
    githubLink?: string;
    problemStatement?: string;
    architecture?: string;
    results?: string;
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f172a] border border-cyan-500/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
            >
              {/* Header Gradient */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-t-2xl"></div>
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-red-500 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>

              <div className="p-8 md:p-10 relative z-10 mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-8 text-gray-300">
                  {project.problemStatement && (
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b border-white/10 pb-2">The Problem</h3>
                      <p className="leading-relaxed">{project.problemStatement}</p>
                    </div>
                  )}

                  {project.architecture && (
                    <div>
                      <h3 className="text-xl font-semibold text-violet-400 mb-2 border-b border-white/10 pb-2">Architecture & Approach</h3>
                      <p className="leading-relaxed">{project.architecture}</p>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 border-b border-white/10 pb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-400">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.results && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2 border-b border-white/10 pb-2">Results & Impact</h3>
                      <p className="leading-relaxed">{project.results}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-10 pt-6 border-t border-white/10">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/20"
                    >
                      <FaGithub /> View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
