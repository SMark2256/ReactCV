import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
      return ( 
            <nav className={styles.navigation}>
                  <div className={styles.logo}>
                        <Image src="/logo.svg" width={80} height={80}/>
                  </div>
                  <Link href="/"><a>Home</a></Link>
                  <Link href="/about"><a>About</a></Link>
            </nav>
       );
}
 
export default Navbar;