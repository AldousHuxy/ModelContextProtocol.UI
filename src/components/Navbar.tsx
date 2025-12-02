import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModeContext } from '@/context/ModeContext';
import { useAgent } from '@/context/AgentContext';

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useModeContext();
  
  const { agents, selectedAgent, changeSelectedAgent } = useAgent();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={`flex items-center justify-between gap-4 p-4 transition-colors duration-300 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-400'}`}>
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg text-white">Letter's of Map Change Chatbot</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Select agent"
            >
              {selectedAgent.icon}
              <span className="text-sm font-medium">{selectedAgent.name}</span>
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-56 rounded-lg shadow-lg overflow-hidden z-10 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => {
                      changeSelectedAgent(agent);
                      setIsDropdownOpen(false);
                    }}
                    className={`cursor-pointer w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                      selectedAgent.id === agent.id
                        ? isDarkMode
                          ? 'bg-gray-600 text-white'
                          : 'bg-blue-50 text-blue-900'
                        : isDarkMode
                          ? 'text-gray-200 hover:bg-gray-600'
                          : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {agent.icon}
                    <span className="text-sm font-medium">{agent.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/settings')}
            className="cursor-pointer p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Settings"
          >
            <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <button
            onClick={toggleDarkMode}
            className="cursor-pointer p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
    </nav>
  );
}