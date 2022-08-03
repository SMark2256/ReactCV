import NavLink from "./NavLink"
import Image from 'next/image'

const NavBarLogo = ({src}) => {
    return ( 
        <NavLink to="/"><Image className={'text-2xl font-semibold cursor-pointer'} alt="logo"  src={src} href="/" width={80} height={80}/></NavLink>
     )
}
 
export default NavBarLogo