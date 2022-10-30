import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div className={styles.container}>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>This is a paragraph</p>
    <p className={styles.text}>This is a paragraph</p>
    <p className={styles.text}>This is a paragraph</p>
    <Link href="/projects"><a className={styles.btn}>See Projects</a></Link>
   </div>
  )
}
