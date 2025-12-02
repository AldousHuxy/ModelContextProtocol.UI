import { useModeContext } from '@/context/ModeContext';
import { Main } from '../../components/Main';

const Home = () => {
  const { isDarkMode } = useModeContext();

  return (
    <Main isDarkMode={isDarkMode} />
  );
};

export default Home;