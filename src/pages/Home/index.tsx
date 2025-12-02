import { Main } from '../../components/Main';

type HomeProps = {
  isDarkMode: boolean;
};

export const Home = ({ isDarkMode }: HomeProps) => {
  return <Main isDarkMode={isDarkMode} />;
};
