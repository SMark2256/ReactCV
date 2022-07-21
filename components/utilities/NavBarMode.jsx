import NavLink from './NavLink.jsx'
 
const NavBarMode = ({ stylemode, onClick }) => {

    const desktopMode = "mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4"
    const mobileMode = "text-3xl text-center text-white font-semibold my-2 bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 w-96 md:w-full  rounded-full"

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
              <NavLink to="/works">
                      <button className={stylemode} onClick={onClick}>Tapasztalataim</button>
              </NavLink>
              <NavLink to="/educations">
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