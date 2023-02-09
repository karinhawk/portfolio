import styles from "../styles/Card.module.scss";
import Image from "next/image";
import capybara from "../public/projects/capybara.png";
import piano from "../public/projects/pianoimg.png";
import punk from "../public/projects/punkimg.png";
import pokemon from "../public/projects/pokemon.jpg";
import snap from "../public/projects/snap.png";
import weather from "../public/projects/weather-app.png";
import property from "../public/projects/property.png";
import stocks from "../public/projects/stocks.png";
import library from "../public/projects/library.png";

const Card = ({ name, description, repo, liveSite }) => {
  let image = "";
  switch (name) {
    case "Capybara Dating Simulator":
      image = capybara;
      break;
    case "Piano App":
      image = piano;
      break;
    case "Java Snap":
      image = snap;
      break;
    case "Estate Haven":
      image = property;
      break;
    case "Stock Cube":
      image = stocks;
      break;
    case "Java Library System":
      image = library;
      break;
    case "Pokemon Team Builder":
      image = pokemon;
      break;
    case "Punk-API":
      image = punk;
      break;
    case "Weather App":
      image = weather;
      break;
    default:
      image = capybara;
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src={image}
          alt={name}
          height={500}
          width={800}
        />
        <h3 className={styles.desc}>{description}</h3>
      </div>
      <div className={styles.btns}>
        <button>
          <a className={styles.btn} href={repo}>
            Visit Repo
          </a>
        </button>
        {liveSite && (
          <button>
            <a className={styles.btn} href={liveSite}>
              See it in action
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
