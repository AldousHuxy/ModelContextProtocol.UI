import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-1 overflow-hidden relative">
          <div className={`h-full transition-all duration-300 ${isSidebarOpen ? 'mr-80' : 'mr-0'}`}>
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />
            </Routes>
          </div>
          <Sidebar isDarkMode={isDarkMode} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App
