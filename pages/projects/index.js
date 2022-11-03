import Head from "next/head"
import styles from "../../styles/Projects.module.scss"

const Projects = () => {
  return (
    <>
    <Head>
      <title>Karin&apos;s Portfolio | Projects</title>
      <meta name='keywords' content='full-stack coding junior developer'/>
    </Head>
    <div>
      <h1 className={styles.title}>My Projects</h1>
    </div>
    </>
  )
}

export default Projects