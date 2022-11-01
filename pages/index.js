import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Karin's Portfolio | Home</title>
      <meta name='keywords' content='full-stack coding junior developer'/>
    </Head>
   <div className={styles.container}>
    <h1 className={styles.title}>const Karin = A full-stack junior developer based in London;</h1>
    <div className={styles.content}>
    <Image className={styles.picture} src='/KarinPicture.jpg' height={300} width={270}/>
    <div className={styles.textBlock}>
    <p className={styles.text}>Completing the 12 week _nology full-stack course has provided me with all of the necessary skills to thrive as a Junior developer.</p>
    <p className={styles.text}>Here's my tech stack:</p>
    <div className={styles.icons}>
      <Image className={styles.icon} src='/java.png' height={75} width={75} alt="java"/>
      <Image className={styles.icon} src='/javascript.png' height={75} width={75} alt="javascript"/>
      <Image className={styles.icon} src='/html.png' height={75} width={75} alt="html5"/>
      <Image className={styles.icon} src='/react.png' height={75} width={75} alt="react native"/>
      <Image className={styles.icon} src='/springboot.png' height={75} width={75} alt="springboot"/>
      <Image className={styles.icon} src='/sass.png' height={75} width={75} alt="sass"/>
      <Image className={styles.icon} src='/git.png' height={75} width={75} alt="git"/>
      <Image className={styles.icon} src='/firebase.png' height={75} width={75} alt="firebase"/>
      <Image className={styles.icon} src='/next.png' height={75} width={75} alt="nextJS"/>
    </div>
    <p className={styles.text}>Feel free to take a look through my projects by clicking the button below or the link up there in the nav!</p>
    </div>
    </div>
    <Link href="/projects"><a className={styles.btn}>See Projects</a></Link>
   </div>
   </>
  )
}
