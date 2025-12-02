import { createContext, useContext, useState, type ReactNode } from 'react';

type ModeProviderProps = { children: ReactNode };

type ModeContext = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ModeContext = createContext({} as ModeContext);

export const useModeContext = () => useContext(ModeContext);

export const ModeProvider = ({ children }: ModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};