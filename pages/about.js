import Head from "next/head";
import Image from "next/image";
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <>
      <Head>
        <title>Karin&apos;s Portfolio | About</title>
        <meta name='keywords' content='full-stack coding junior developer' />
      </Head>
      <div>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content}>
          <Image className={styles.picture} src='/karincello.png' height={10} width={300} alt="me with my cello" />
          <div className={styles.textBlock}>
          <p>My name is Karin, a Junior Software Developer (and cellist!). I attended the full-stack developer course which _nology offered, beginning in August and finishing in October 2022.</p>
          <p>I have made huge progress since beginning the course due to starting with no coding experience and I have consistently turned in high quality projects to praise. Coming from a degree in Music, I&apos;m constantly driven to learn and create, which drew me to a career in Tech due to the similar motivations it shares with Music.</p>
          <p>My strengths include picking up programming languages quickly, designing and coding pleasing user-interfaces; being able to take both leading and collaborative roles; and having lots and lots of enthusiasm!</p>
          <p>React has been an especially motivating library to work with, spurring me to take on my own projects outside of the course which blend my love of both music and coding, such as my piano app.</p>
          <p>Having finished the course this October, I wanted to delve into NextJS and firebase - which resulted in this!</p>
        </div>
        <Image className={styles.picture} src='/KarinPicture.jpg' height={75} width={500}/>
        </div>
      </div>
    </>
  );
}

export default About;