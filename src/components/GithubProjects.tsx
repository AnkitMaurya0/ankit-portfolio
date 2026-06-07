import React, { useEffect, useState } from 'react';
import { fetchGithubRepos, filterReposByCategory } from '../services/githubApi';
import type { GithubRepo } from '../services/githubApi';
import GithubRepoCard from './GithubRepoCard';

const categories = {
  All: [] as string[],
  'AI/ML': ['ai', 'ml', 'machine', 'learning', 'nlp', 'data', 'science'],
  'Web Development': ['web', 'frontend', 'react', 'vite', 'javascript', 'css', 'html'],
  Robotics: ['robot', 'arduino', 'esp32', 'automation', 'sensor'],
  Electronics: ['electronics', 'circuit', 'embedded', 'hardware'],
};

type CategoryKey = keyof typeof categories;

const GithubProjects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [filtered, setFiltered] = useState<GithubRepo[]>([]);
  const [activeTab, setActiveTab] = useState<CategoryKey>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchGithubRepos('AnkitMaurya0');
        setRepos(data);
        setFiltered(data);
      } catch (e) {
        console.error('Failed to fetch GitHub repos', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (activeTab === 'All') {
      setFiltered(repos);
    } else {
      const keywords = categories[activeTab];
      setFiltered(filterReposByCategory(repos, keywords));
    }
  }, [activeTab, repos]);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">GitHub Projects</h2>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 overflow-x-auto">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as CategoryKey)}
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap 
              ${activeTab === cat ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/15'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
};

export default GithubProjects;
