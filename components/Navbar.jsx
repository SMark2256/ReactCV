import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

const NavLink = ({to, children}) => {
    return <Link href={to}>
        {children}
    </Link>
}

const NavBarMode = ({ stylemode, onClick }) => {

    const desktopMode = "mx-4 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 duration-200 text-white font-semibold py-2 px-4"
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
            <NavLink to="/works">
                    <button className={stylemode} onClick={onClick}>Works</button>
            </NavLink>
            <NavLink to="/about">
                    <button className={stylemode} onClick={onClick}>About me</button>
            </NavLink>
            <NavLink to="/contact">
                    <button className={stylemode} onClick={onClick}>Contact</button>
            </NavLink>
        </>
    )
}

const MobileNav = ({open, setOpen}) => {
    return (
        <div className={`absolute top-0 left-0 h-screen w-full  bg-slate-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter bg-slate-900 h-20 md:hidden"> {/*logo container*/}
            <NavLink to="/"><Image className="text-2xl font-semibold" src="/logo.svg" href="/" width={80} height={80} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}/></NavLink>
            </div>
            <div className="flex flex-col ml-4 py-16">
                <NavBarMode stylemode="mobile" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}/>
            </div>  
        </div>
    )
}

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-slate-900 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
            <NavLink to="/"><Image className={'text-2xl font-semibold'} src="/logo.svg" href="/" width={80} height={80}/></NavLink>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
                    {/* hamburger button */}
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transition-all duration-200 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform transition duration-200 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                <NavBarMode stylemode="desktop" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;