
import React, { useState, useMemo } from 'react';
import StatCard from './components/StatCard';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const characters = text.length;
    const words = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g)?.length || 0;
    const paragraphs = trimmedText === '' ? 0 : trimmedText.split(/\n+/).filter(p => p.trim() !== '').length;
    const readingTime = Math.ceil(words / 225);

    return {
      words,
      characters,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const formatReadingTime = (minutes: number) => {
    if (minutes < 1) return 'Less than a minute';
    if (minutes === 1) return '1 minute read';
    return `${minutes} minutes read`;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="relative">
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Start typing or paste your text here..."
                className="w-full h-64 p-4 text-lg bg-slate-50 dark:bg-slate-900/75 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-y transition-colors duration-200"
              />
              {text.length > 0 && (
                 <button
                    onClick={handleClear}
                    className="absolute top-3 right-3 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full p-2 transition-transform duration-150 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800"
                    aria-label="Clear text"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                 </button>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCard label="Words" value={stats.words} />
            <StatCard label="Characters" value={stats.characters} />
            <StatCard label="Sentences" value={stats.sentences} />
            <StatCard label="Paragraphs" value={stats.paragraphs} />
            <StatCard label="Reading Time" value={formatReadingTime(stats.readingTime)} className="col-span-2 md:col-span-1 lg:col-auto"/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
