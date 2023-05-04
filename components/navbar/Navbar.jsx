import { useState } from 'react';
import NavBarMode from './NavBarMode.jsx';
import NavBarLogo from './NavBarLogo.jsx';
import NavBarName from './NavBarName.jsx';
import DarkLight from './DarkLight.jsx';
import NavBarMotion from './NavBarMotion.jsx';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const MobileNav = ({ open, setOpen }) => {
        return (
            <>
                {open && (
                    <div
                        className={`absolute left-0 h-screen w-full  bg-slate-900/40 drop-shadow-md `}>
                        <NavBarMotion>
                            <div className="absolute top-24 items-center text-center w-full">
                                <NavBarMode
                                    stylemode="mobile"
                                    open={open}
                                    onClick={() => setOpen(!open)}
                                />
                            </div>
                        </NavBarMotion>
                    </div>
                )}
            </>
        );
    };

    return (
        <nav className="flex filter drop-shadow-md bg-slate-900/40 lg:rounded-b-xl px-4 h-24 lg:w-5/6 align-middle mx-auto z-50">
            <MobileNav open={open} setOpen={setOpen} />

            <div
                className="w-3/12 flex items-center"
                onClick={() => {
                    setOpen(false);
                }}>
                <NavBarLogo src="/logo.svg" />
                <NavBarName />
            </div>

            <div className="w-9/12 flex justify-end items-center">
                {open == false ? (
                    <div
                        className="z-50 flex absolute right-20 w-8 h-8 flex-col justify-between items-center lg:hidden cursor-pointer"
                        onClick={() => {
                            setOpen(!open);
                        }}>
                        {/* hamburger button closed*/}
                        <span
                            className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg`}
                        />
                        <span
                            className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg`}
                        />
                        <span
                            className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg`}
                        />
                    </div>
                ) : (
                    <div
                        className="z-50 flex absolute right-20 w-8 h-8 flex-col justify-between items-center lg:hidden cursor-pointer"
                        onClick={() => {
                            setOpen(!open);
                        }}>
                        {/* hamburger button opened*/}
                        <span
                            className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg transform rotate-45 translate-y-3.5`}
                        />
                        <span
                            className={`h-2 w-0 bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg`}
                        />
                        <span
                            className={`h-2 w-full bg-cyan-500 shadow-lg shadow-cyan-500/80 rounded-lg tranform -rotate-45 -translate-y-2.5`}
                        />
                    </div>
                )}
                <div className="hidden lg:flex absolute right-14">
                    <NavBarMode stylemode="desktop" open={open} />
                </div>
                <div className="absolute right-0">
                    <DarkLight />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
