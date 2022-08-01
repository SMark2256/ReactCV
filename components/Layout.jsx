import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import {ThemeProvider} from 'next-themes'

const Layout = ({ children }) => {
      return ( 
            
            <div className="text-white mx-auto">
                  <ThemeProvider>
                        <Navbar />
                              <div className='text-center text-lg md:text-2xl xl:text-4xl py-10 z-10 dark:bg-cyan-900'>{ children }</div>
                        <Footer />
                  </ThemeProvider>
            </div>
       )
}
 
export default Layout;