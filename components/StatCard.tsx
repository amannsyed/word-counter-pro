
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-800/50 p-5 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-indigo-100 dark:hover:shadow-indigo-900/50 hover:-translate-y-1 ${className}`}>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{value}</p>
    </div>
  );
};

export default StatCard;
