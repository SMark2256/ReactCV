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
            <div className={`absolute left-0 top-24 h-screen w-full bg-slate-900/40 md:z-50 ${open ? "" : "-translate-x-full hidden opacity-0"} drop-shadow-md `}>
                <motion.div className="absolute flex flex-col items-center top-6 h-screen w-full z-20 lg:hidden"
                initial={[{ opacity: 0}, {y: "-10vw"}]}
                animate={[{ opacity: 1}, {y: 0}]}
                transition={{ duration: 0.5 }}>
                    <NavBarMode stylemode="mobile" open={open} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}/>
                </motion.div>  
            </div>
        )
      }

    return (
        <nav className="flex filter drop-shadow-md bg-slate-900/40 lg:rounded-b-xl px-4 h-24 lg:w-5/6 align-middle mx-auto z-50">
            <MobileNav open={open} setOpen={setOpen}/>
            
            <div className="w-3/12 flex items-center" onClick={() => {setOpen(false)}}>
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