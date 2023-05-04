import Navbar from './navbar/Navbar.jsx';
import { ThemeProvider } from 'next-themes';

const Layout = ({ children }) => {
    return (
        <div className="text-white mx-auto h-screen overflow-x-hidden">
            <ThemeProvider>
                <Navbar />
                <div className="text-center text-lg md:text-2xl xl:text-4xl py-16 z-10 dark:bg-cyan-900">
                    {children}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
