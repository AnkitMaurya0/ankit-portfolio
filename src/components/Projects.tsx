import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ui/ProjectModal';

const projectsData = [
  {
    title: 'SMARTHIRE – AI Recruitment Platform',
    description: 'An AI-powered smart hiring platform designed to streamline the recruitment process by intelligently matching candidates to job roles using modern ML techniques.',
    techStack: ['Python', 'Machine Learning', 'Flask', 'NLP', 'MySQL'],
    features: [
      'Intelligent Candidate Matching',
      'Resume Parsing & Analysis',
      'Role-based Scoring System',
      'Automated Shortlisting',
      'Recruiter Dashboard',
    ],
    githubLink: 'https://github.com/AnkitMaurya0/SMARTHIRE',
    problemStatement: 'Traditional recruitment processes are slow, biased, and inefficient — recruiters manually sift through hundreds of resumes to find the right candidate, which is both time-consuming and error-prone.',
    architecture: 'Built an AI-powered pipeline that parses resumes using NLP techniques to extract structured data (skills, education, experience). A scoring algorithm then ranks candidates against job descriptions using keyword matching and semantic similarity, powered by Python and served via a Flask backend.',
    results: 'The platform significantly reduces the time-to-hire by automating candidate shortlisting. Recruiters can instantly view ranked candidates with a compatibility score, making the hiring process faster and more objective.',
  },
  {
    title: 'Amazon Recommendation System',
    description: 'Built and deployed an AI-powered product search and recommendation engine.',
    techStack: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'NLP'],
    features: [
      'Semantic Product Search',
      'Similarity Ranking',
      'Product Recommendation',
      'Real-Time Search',
      'Live Deployment',
    ],
    liveLink: 'https://amazon-recommendation-system-a.streamlit.app/',
    githubLink: 'https://github.com/AnkitMaurya0/Amazon-Recommendation-System',
    problemStatement: 'E-commerce platforms struggle with product discoverability. Users often search for products using descriptive terms rather than exact matches, leading to poor search results and lost sales.',
    architecture: 'I implemented a Content-Based Recommendation System using TF-IDF (Term Frequency-Inverse Document Frequency) vectorization to process Amazon product descriptions. I then used Cosine Similarity to calculate the mathematical distance between search queries and product features, ensuring highly relevant semantic matches.',
    results: 'The deployed Streamlit app allows users to input any product description and instantly receive the top 5 most semantically similar products from the dataset, demonstrating practical NLP applications in real-time.',
  },
  {
    title: 'Artify – Multi Vendor Web Marketplace',
    description: 'Developed a full-stack marketplace connecting artisans with buyers using Flask and MySQL. Implemented secure user authentication, product management, and intuitive UI.',
    techStack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    features: [
      'Multi-Vendor Support',
      'Role-based Access Control',
      'Secure Authentication',
      'Product Management',
    ],
    githubLink: 'https://github.com/AnkitMaurya0/artify',
    problemStatement: 'Local artisans often lack the technical skills to build individual storefronts, while buyers struggle to find authentic handcrafted goods across scattered platforms.',
    architecture: 'Built a robust monolithic backend using Python and Flask. Implemented a relational MySQL database to manage complex relationships between users (buyers/sellers), products, categories, and orders. Used Jinja templates for server-side rendering of the UI.',
    results: 'Created a fully functional, secure marketplace MVP that handles role-based access, allowing vendors to seamlessly upload inventory while buyers can browse and purchase securely.',
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-white/5">
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="cursor-pointer" onClick={() => setSelectedProject(project)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
