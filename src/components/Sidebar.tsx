import { useState } from 'react';
import { FileBrowser } from './FileBrowser';
import { useModeContext } from '@/context/ModeContext';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { isDarkMode } = useModeContext();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (filePath: string) => {
    setSelectedFile(filePath);
    console.log('Selected file:', filePath);
    // TODO: Load file content via MCP
  };

  const handleRun = () => {
    setIsRunning(true);
    setProgress(0);
    console.log('running...');
    
    // Animate progress bar over 2 seconds
    const duration = 2000;
    const intervalTime = 20; // Update every 20ms for smooth animation
    const steps = duration / intervalTime;
    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setIsRunning(false);
        setProgress(0);
      }
    }, intervalTime);
  };

  return (
    <>
      {/* Sidebar panel */}
      <div
        className={`absolute top-0 right-0 h-full w-80 z-30 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDarkMode 
            ? 'bg-gray-800 border-l border-gray-700' 
            : 'bg-white border-l border-gray-200'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <h2 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              LOMC Explorer
            </h2>
            <p className={`text-xs mt-1 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              24-08-0233R Lemon Gulch Reach 1
            </p>
          </div>

          {/* File Browser */}
          <div className="flex-1 overflow-y-auto p-4">
            <FileBrowser isDarkMode={isDarkMode} onFileSelect={handleFileSelect} />
          </div>

          {/* Selected File Info */}
          {selectedFile && (
            <div className={`p-4 border-t ${
              isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-50'
            }`}>
              <p className={`text-xs font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Selected:
              </p>
              <p className={`text-xs truncate ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {selectedFile}
              </p>
            </div>
          )}

          {/* Progress Bar */}
          {isRunning && (
            <div className={`mt-3 h-1.5 rounded-full overflow-hidden ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <div
                className="h-full bg-medium-green transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          
          {/* Run Button */}
          <div className={`p-4 border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-medium-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRunning ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Run Analysis</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

    </>
  );
};
