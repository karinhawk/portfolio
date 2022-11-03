import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { Link as LinkTo } from 'react-scroll'

export default function Home() {
  return (
    <>
      <Head>
        <title>Karin&apos;s Portfolio | Home</title>
        <meta name='keywords' content='full-stack coding junior developer' />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.typing}>&lsaquo;Karin&rsaquo;Junior Full-stack developer&lsaquo;&#47;Karin&rsaquo;</h1>
        </div>
        <div className={styles.expand}>
          <h2 className={styles.title}>see my tech-stack</h2>
          <LinkTo to="stack" smooth={true}>
            <Image className={styles.icon} src='/arrow-down.svg' height={75} width={75} alt="see my tech stack" />
          </LinkTo>
        </div>
        <div className={styles.content}>
          <div className={styles.textBlock} id="stack">
            <h2 className={styles.title}>Here&apos;s my tech-stack:</h2>
            <div className={styles.icons}>
              <Image className={styles.icon} src='/java.png' height={75} width={75} alt="java" />
              <Image className={styles.icon} src='/javascript.png' height={75} width={75} alt="javascript" />
              <Image className={styles.icon} src='/html.png' height={75} width={75} alt="html5" />
              <Image className={styles.icon} src='/react.png' height={75} width={75} alt="react native" />
              <Image className={styles.icon} src='/springboot.png' height={75} width={75} alt="springboot" />
              <Image className={styles.icon} src='/sass.png' height={75} width={75} alt="sass" />
              <Image className={styles.icon} src='/git.png' height={75} width={75} alt="git" />
              <Image className={styles.icon} src='/firebase.png' height={75} width={75} alt="firebase" />
              <Image className={styles.icon} src='/next.png' height={75} width={75} alt="nextJS" />
            </div>
            <p className={styles.text}>Feel free to take a look through my projects by clicking the button below or the link up there in the nav!</p>
            <Link href="/projects"><a className={styles.btn}>See Projects</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}
