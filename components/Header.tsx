import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <ThemeToggle />
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Word Counter Pro
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Instantly analyze your text with a clean and modern interface.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;