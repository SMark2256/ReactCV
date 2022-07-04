import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
                  <p> 
                        This is the home page, you can go back to this page.
                  </p>
    </div>
  )
}
