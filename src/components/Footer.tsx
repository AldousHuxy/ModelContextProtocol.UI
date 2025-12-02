import { useModeContext } from "@/context/ModeContext";

export const Footer = () => {
    const { isDarkMode } = useModeContext();
    const year = new Date().getFullYear();

    return (
        <footer className={`flex items-center justify-center p-4 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-mhfd-dark-blue'
        }`}>
            <p className="text-white">&copy; {year} Mile High Flood District. All rights reserved.</p>
        </footer>
    );
}