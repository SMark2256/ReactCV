import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";

const Layout = ({ children}) => {
      return ( 
            <div className="text-white w-full mx-auto">
                  <Navbar />
                  <div className='text-center text-lg md:text-2xl xl:text-4xl py-10 z-10'>{ children }</div>
                  <Footer />
            </div>
       )
}
 
export default Layout;