import styles from "./DogDetail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { details } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const DogDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector((state) => state.dogDetails);

  useEffect(() => {
    dispatch(details(id));
  }, [id, dispatch]);

  return (
    <div className="container">
      <h1>{detail.name} details</h1>
      <div>
        <h2>Temperaments: {detail.temperament}</h2>
        <h2>Weight: {detail.weightMin} kg</h2>
        <h2>Height: {detail.heightMin} cm</h2>
        <h2>Life span: {detail.lifeSpanMin}</h2>
        <img
          className={styles.img}
          src={detail.image}
          alt={detail.name}
        ></img>
      </div>
    </div>
  );
};

export default DogDetail;
