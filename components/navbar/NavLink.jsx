import Link from 'next/link';

const NavLink = ({ to, children }) => {
    return <Link href={to}>{children}</Link>;
};

export default NavLink;
