import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return (
    <div data-theme={theme} className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="p-4 flex justify-between items-center bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Multixport Pro</h1>
        <button onClick={toggleTheme} className="p-2 bg-blue-800 rounded">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      <main className="p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-lg">¡Bienvenido a la futura consola deportiva!</p>
        </motion.div>
      </main>
    </div>
  );
}

export default App;