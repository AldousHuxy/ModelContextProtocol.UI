import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useModeContext } from './context/ModeContext';
import { Navbar } from './components/Navbar';

const App = () => {
  const { isDarkMode } = useModeContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <Header />
      <Navbar />
      <div className="flex-1 overflow-hidden relative">
        <div className={`h-full transition-all duration-300 ${isSidebarOpen ? 'lg:mr-80' : 'mr-0'}`}>
          <Outlet />
        </div>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default App
