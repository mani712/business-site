import React from 'react';
import { Moon } from 'lucide-react';

const ThemeToggle = () => {
  return (
    <div className="p-2 rounded-full bg-gray-700 cursor-default">
      <Moon className="h-6 w-6 text-blue-400" />
    </div>
  );
};

export default ThemeToggle;