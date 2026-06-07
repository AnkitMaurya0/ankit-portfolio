import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const positiveWords = ['good', 'great', 'awesome', 'excellent', 'amazing', 'love', 'happy', 'best', 'cool', 'perfect', 'intelligent', 'smart', 'impressed', 'impressive'];
const negativeWords = ['bad', 'terrible', 'awful', 'worst', 'hate', 'sad', 'poor', 'stupid', 'dumb', 'fail', 'boring'];

const AiWidget: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<'positive' | 'negative' | 'neutral' | null>(null);

  const analyzeSentiment = (input: string) => {
    if (!input.trim()) {
      setResult(null);
      return;
    }

    const words = input.toLowerCase().match(/\b\w+\b/g) || [];
    let score = 0;

    words.forEach(word => {
      if (positiveWords.includes(word)) score++;
      if (negativeWords.includes(word)) score--;
    });

    if (score > 0) setResult('positive');
    else if (score < 0) setResult('negative');
    else setResult('neutral');
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    analyzeSentiment(e.target.value);
  };

  return (
    <div className="glass p-6 rounded-2xl w-full max-w-md mx-auto relative overflow-hidden group border border-cyan-500/30">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <FaBrain className="text-xl" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Live AI Demo</h3>
            <p className="text-cyan-400 text-xs">NLP Sentiment Analysis</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          Type a sentence below to see real-time sentiment analysis using a simple dictionary-based algorithm.
        </p>

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="e.g., 'This portfolio is amazing!'"
          className="w-full bg-[#0f172a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors mb-4"
        />

        <div className="h-12 flex items-center justify-center bg-[#0f172a] rounded-lg border border-white/5">
          {result === null ? (
            <span className="text-gray-500 text-sm font-medium">Awaiting input...</span>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={result}
              className="flex items-center gap-2"
            >
              {result === 'positive' && (
                <><FaSmile className="text-green-400 text-xl" /> <span className="text-green-400 font-bold">Positive Sentiment</span></>
              )}
              {result === 'negative' && (
                <><FaFrown className="text-red-400 text-xl" /> <span className="text-red-400 font-bold">Negative Sentiment</span></>
              )}
              {result === 'neutral' && (
                <><FaMeh className="text-yellow-400 text-xl" /> <span className="text-yellow-400 font-bold">Neutral Sentiment</span></>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiWidget;
