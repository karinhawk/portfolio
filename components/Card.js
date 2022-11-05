import styles from "../styles/Card.module.scss"
import Image from "next/image";
import capybara from "../public/projects/capybara.png";
import piano from "../public/projects/pianoimg.png";
import punk from "../public/projects/punkimg.png";
import calculator from "../public/projects/calculator.png";
import pokemon from "../public/projects/pokemon.jpg";
import snap from "../public/projects/snap.png";

const Card = ({ name, description, repo, liveSite }) => {


  let image = "";
  switch (name) {
    case "Capybara Dating Simulator":
      image = capybara
      break;
    case "Piano App":
      image = piano
      break;
    case "Java Snap":
      image = snap
      break;
    case "Pokemon Team Builder":
      image = pokemon
      break;
    case "Punk-API":
      image = punk
      break;
    case "Vanilla Calculator":
      image = calculator
      break;
      default:
      image = capybara;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.content}>
      <Image className={styles.image} src={image} alt={name} height={500} width={800}/>
      <h3 className={styles.desc}>{description}</h3>
      </div>
      <div className={styles.btns}>
      <button><a className={styles.btn} href={repo}>Visit Repo</a></button>
      {liveSite && <button><a className={styles.btn} href={liveSite}>See it in action</a></button>}
      </div>
    </div>
  )
}

export default Card