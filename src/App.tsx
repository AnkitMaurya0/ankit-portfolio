// App component
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubProjects from './components/GithubProjects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ResumePreview from './components/ResumePreview';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Helmet>
        <title>Ankit Kumar | AI & Machine Learning Engineer</title>
        <meta name="description" content="Portfolio of Ankit Kumar, an aspiring AI & Machine Learning Engineer specializing in Python, NLP, and Data Science." />
        
        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ankit Kumar | AI & Machine Learning Engineer" />
        <meta property="og:description" content="Portfolio of Ankit Kumar, an aspiring AI & Machine Learning Engineer specializing in Python, NLP, and Data Science." />
        <meta property="og:image" content="https://github.com/AnkitMaurya0.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ankit Kumar | AI & Machine Learning Engineer" />
        <meta property="twitter:description" content="Portfolio of Ankit Kumar, an aspiring AI & Machine Learning Engineer specializing in Python, NLP, and Data Science." />
        <meta property="twitter:image" content="https://github.com/AnkitMaurya0.png" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <div className="py-12 bg-white/5">
          <div className="max-w-6xl mx-auto">
             <GithubProjects />
          </div>
        </div>
        <Achievements />
        <Certifications />
        <ResumePreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
