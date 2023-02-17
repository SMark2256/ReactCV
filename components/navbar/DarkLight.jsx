import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const DarkLight = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));
    const toggleIcon = theme === 'dark' ? <BsSunFill /> : <BsMoonFill />;

    return (
        <button
            className="mx-4 rounded-xl text-2xl dark:bg-cyan-300 shadow-lg dark:shadow-cyan-500/30 dark:hover:bg-teal-600 dark:hover:shadow-teal-700  duration-200 text-white font-semibold py-2 px-2"
            onClick={toggleTheme}>
            {toggleIcon}
        </button>
    );
};

export default DarkLight;
