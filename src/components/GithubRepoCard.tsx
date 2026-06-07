import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import type { GithubRepo } from '../services/githubApi';

interface GithubRepoCardProps {
  repo: GithubRepo;
}

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({ repo }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent group h-full hover:from-cyan-500/30 hover:to-violet-500/10 transition-colors duration-500"
    >
      <div className="glass p-6 flex flex-col h-full rounded-xl relative z-10 bg-[#0f172a]/90">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white break-words group-hover:text-cyan-400 transition-colors">
          {repo.name}
        </h3>
        <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md text-sm shrink-0">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          {repo.language || 'Multiple'}
        </span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
        >
          View Repo <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
      </div>
    </motion.div>
  );
};

export default GithubRepoCard;
