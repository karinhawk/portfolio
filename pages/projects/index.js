import Head from "next/head"
import styles from "../../styles/Projects.module.scss"
import { firestore } from "/lib/firebase.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import ProjectsList from "../../components/ProjectsList"
import { useEffect, useState } from "react";
 
const Projects = () => {
 
  const [projects, setProjects] = useState([]);
 
  const handleRead = async () => {
    const projectsCollection = collection(firestore, "projects");
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => doc.data());
    console.log(projectsList);
    setProjects(projectsList);
  }

  useEffect(() => {
    handleRead();
  }, []);
 
 
  return (
    <>
    <Head>
      <title>Karin&apos;s Portfolio | Projects</title>
      <meta name='keywords' content='full-stack coding junior developer'/>
    </Head>
    <div>
      <h1 className={styles.title}>My Projects</h1>
      <section>
      <ProjectsList projectsArr={projects} />
      </section>
      <p className={styles.text}>This is just a selection! Take a look at my <a href='https://github.com/karinhawk'>GitHub</a> for more projects in various stages of development.</p>
    </div>
    </>
  )
}
 
export default Projects