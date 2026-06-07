import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ResumePreview: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="glass p-6 md:p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ankit Kumar - Resume</h3>
              <p className="text-gray-400">View or download my full resume (PDF format)</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-full hover:scale-105 transition-transform whitespace-nowrap"
            >
              <FaDownload /> Download PDF
            </a>
          </div>

          <div className="w-full aspect-[1/1.4] md:aspect-[1/1.2] lg:aspect-auto lg:h-[800px] bg-white/5 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center relative">
            <embed 
              src="/resume.pdf#view=FitH" 
              type="application/pdf" 
              className="w-full h-full object-cover hidden md:block" 
            />
            {/* Fallback for smaller screens or browsers that don't support embed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gray-900 md:hidden">
                <p className="text-gray-300 mb-4">PDF preview is limited on smaller screens.</p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium underline"
                >
                  Open Resume in new tab
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;
