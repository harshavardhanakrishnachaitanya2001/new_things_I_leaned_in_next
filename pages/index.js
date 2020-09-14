import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
    <Head>
      <title>Things I learned</title>
    </Head>
    <nav className={styles.navigation}>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/contact'>Contact</Link>
    </nav>
    <h1 className={styles.title}>Things I learned</h1>
    <p className={styles.description}>Hey guys!! This is an application created using nextjs, for practicing the concepts I learned 
    till now. Let's see about them. The latest nextjs concepts I learned are: <Link href='/fetchdata'>Data fetching</Link>, <Link href='/dynamicRoute'>dynamic routing</Link>
    and <Link href='/loadStaticFiles'>Loading static files</Link>. I am developing this web-application from scratch so that this will act 
    as a refresher for me.</p>
    </div>
  )
}




