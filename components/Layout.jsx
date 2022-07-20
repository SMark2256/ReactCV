import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const Layout = ({ children}) => {
      return ( 
            <div className="text-white w-full">
                  <Navbar />
                  <div className='text-center text-4xl py-20'>{ children }</div>
                  <Footer />
            </div>
       )
}
 
export default Layout;