import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, image, temperament, weightMin, weightMax }) => {
  const temp = temperament?.split(",")?.slice(0, 3) + ",";

  return (
    <div className={styles.cardContainer}>
      <Link className={styles.card} to={`/detail/${id}`}>
        <h2>{name}</h2>

        <img className={styles.img} src={image} alt={name} />

        <h3>{temp?.slice(0, -1)}</h3>
        <h3>
          Weigth: {weightMin} - {weightMax} kg
        </h3>
      </Link>
    </div>
  );
};

export default Card;
