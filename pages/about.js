import Head from "next/head";

const About = () => {
    return ( 
        <>
        <Head>
          <title>Karin's Portfolio | About</title>
          <meta name='keywords' content='full-stack coding junior developer'/>
        </Head>
        <div>
            <h1>About</h1>
                <p>My name is Karin, a Junior Software Developer. I attended the full-stack developer course which _nology offered, beginning in August and finishing in October 2022.</p>
                <p>I have made huge progress since beginning the course due to starting with no coding experience and I have consistently turned in high quality projects to praise. Coming from a degree in Music, I'm constantly driven to learn and create, which drew me to a career in Tech due to the similar motivations it shares with Music.</p>
                <p>My strengths include picking up programming languages quickly, designing and coding pleasing user-interfaces; being able to take both leading and collaborative roles; and having lots and lots of enthusiasm!</p>
                <p>React has been an especially motivating library to work with, spurring me to take on my own projects outside of the course which blend my love of both music and coding. This portfolio was my first project using NextJS, which I found especially satisfying.</p>
        </div>
        </>
     );
}
 
export default About;