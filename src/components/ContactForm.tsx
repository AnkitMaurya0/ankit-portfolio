import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Using Formspree (placeholder endpoint, will need to be replaced with actual formspree ID)
    try {
      const response = await fetch('https://formspree.io/f/xvgzrnqz', { // REPLACE with actual ID later if needed, using a dummy or just mailto for now
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities, specifically AI/ML internships or software development roles. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:ankitkumark9626@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cyan-400/20">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <span>ankitkumark9626@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919113777695" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-green-400/20">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <span>+91 9113777695</span>
                </div>
              </a>

              <a href="https://github.com/AnkitMaurya0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-violet-400/20">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <span>AnkitMaurya0</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ankit-kumar-b1177a32/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-blue-400/20">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <span>ankit-kumar-b1177a32</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>

              {status === 'success' && <p className="text-green-400 text-center text-sm">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-center text-sm">Oops! Something went wrong.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
