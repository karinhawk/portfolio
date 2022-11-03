import Head from "next/head"
import styles from "../../styles/Projects.module.scss"
import { firestore } from "../../lib/firebase.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import ProjectsList from "../../components/ProjectsList"
import { useEffect, useState } from "react";
 
const Projects = () => {
 
  const [projects, setProjects] = useState([]);
 
  const handleRead = () => {
    const projectsCollection = collection(firestore, "projects");
    getDocs(projectsCollection)
    .then(response => {
      // response.docs.forEach(doc => {
      //   console.log(doc.data());
      setProjects(response.docs)
      })
      // })
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
    </div>
    </>
  )
}
 
export default Projects