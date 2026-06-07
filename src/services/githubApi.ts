import axios from 'axios';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

/**
 * Fetch public repositories for the given username.
 * Uses unauthenticated request; if VITE_GITHUB_TOKEN env var is set, it will be used.
 * Returns repos sorted by most recent update (descending).
 */
export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const baseUrl = `https://api.github.com/users/${username}/repos`;
  const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }
  const response = await axios.get<GithubRepo[]>(baseUrl, { headers, params: { per_page: 100 } });
  const repos = response.data;
  // Sort by updated_at descending (most recent first)
  repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  return repos;
}

/**
 * Helper to filter repos by a set of keywords (case‑insensitive).
 * Used for category tabs like AI/ML, Web Development, Robotics, Electronics.
 */
export function filterReposByCategory(repos: GithubRepo[], keywords: string[]): GithubRepo[] {
  if (!keywords.length) return repos;
  const lowered = keywords.map(k => k.toLowerCase());
  return repos.filter(repo => {
    const name = repo.name.toLowerCase();
    const desc = (repo.description ?? '').toLowerCase();
    const topics = repo.topics.map(t => t.toLowerCase()).join(' ');
    const combined = `${name} ${desc} ${topics}`;
    return lowered.every(kw => combined.includes(kw));
  });
}
