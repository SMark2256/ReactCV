import { useState } from 'react'
import NavBarMode from './NavBarMode.jsx'
import NavBarLogo from './NavBarLogo.jsx'
import NavBarName from './NavBarName.jsx'
import DarkLight from './DarkLight.jsx'
import { motion } from 'framer-motion'


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const MobileNav = ({open, setOpen}) => {
        return (
            <div className={`absolute top-0 left-0 h-screen w-full  bg-slate-900/40 transform ${open ? "-translate-x-0" : "-translate-x-full hidden"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      
                <div className="flex flex-col items-center top-24 absolute h-screen w-full z-20 lg:hidden">
                    <NavBarMode stylemode="mobile" open={open} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}/>
                </div>  
            </div>
        )
      }

    return (
        <nav className="flex filter drop-shadow-md bg-slate-900/40 rounded-b-lg px-4 h-24 lg:w-5/6 align-middle mx-auto">
            <MobileNav open={open} setOpen={setOpen}/>
            
            <div className="w-3/12 flex items-center">
            <NavBarLogo src="/logo.svg"/>
            <NavBarName/>
            </div>

            <div className="w-9/12 flex justify-end items-center">
                <div className="z-50 flex absolute right-20 w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {setOpen(!open)}}>
                    {/* hamburger button */}
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transition-all duration-200 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
                <div className="hidden lg:flex absolute right-14">
                <NavBarMode stylemode="desktop" open={open} />
                </div>
                <div className='absolute right-0'>
                    <DarkLight/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;