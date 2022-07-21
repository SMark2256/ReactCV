import NavLink from './NavLink.jsx'
 
const NavBarMode = ({ stylemode, onClick }) => {

    const desktopMode = "mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 duration-200 text-white font-semibold py-2 px-4"
    const mobileMode = "text-3xl text-center text-white font-semibold my-2 bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-cyan-600 w-96 md:w-full  rounded-full"

    switch (stylemode) {
        case 'mobile':
            stylemode = mobileMode
            break;
        case 'desktop':
            stylemode = desktopMode
            break;
    
        default:
            break;
    }
  
      return (
          <>
              <NavLink to="/workspage">
                      <button className={stylemode} onClick={onClick}>Tapasztalataim</button>
              </NavLink>
              <NavLink to="/educationspage">
                      <button className={stylemode} onClick={onClick}>Tanulmányaim</button>
              </NavLink>
              <NavLink to="/about">
                      <button className={stylemode} onClick={onClick}>Rólam</button>
              </NavLink>
              <NavLink to="/contact">
                      <button className={stylemode} onClick={onClick}>Elérhetőség</button>
              </NavLink>
          </>
      )
  }

  export default NavBarMode