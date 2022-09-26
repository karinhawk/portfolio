import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <Navbar />
    <h1>Homepage</h1>
    <p>This is a paragraph</p>
    <p>This is a paragraph</p>
    <p>This is a paragraph</p>
    <Link href="/projects"><a>See Projects</a></Link>
    <Footer />
   </div>
  )
}
