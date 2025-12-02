import { useNavigate } from 'react-router-dom';
import mhfdLogo from '../assets/images/mhfd-logo.svg';
import { useModeContext } from '@/context/ModeContext';

export const Header = () => {
  const { isDarkMode } = useModeContext();
  
  const navigate = useNavigate();

  return (
    <header className={`flex items-center justify-between gap-4 p-4 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-mhfd-dark-blue'}`}>
        <div className="flex items-center gap-4">
          <img src={mhfdLogo} alt="MHFD Logo" className="cursor-pointer h-10" onClick={() => navigate('/')} />
        </div>
    </header>
  );
}