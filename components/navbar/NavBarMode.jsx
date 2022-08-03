import NavLink from './NavLink.jsx'
 
const NavBarMode = ({ stylemode, onClick, open }) => {

    const desktopMode = "mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 duration-200 text-white font-semibold py-2 px-4"
    const mobileMode = "text-lg text-center ml-2 text-white w-32 h-10 font-semibold my-2 bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:bg-teal-600 hover:shadow-teal-700 rounded-xl overflow-y-hidden"

    switch (stylemode) {
        case 'mobile':
            stylemode = open ? mobileMode : desktopMode
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
                      <button className={stylemode} onClick={onClick}>Magamról</button>
              </NavLink>
          </>
      )
  }

  export default NavBarMode