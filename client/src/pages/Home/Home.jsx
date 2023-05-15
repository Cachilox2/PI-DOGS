import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Home.module.css"

const Home = ({
  dogs,
  allDogs,
  currentPage,
  dogsPerPage,
  currentDogs,
  paginate,
  onSearch
}) => {
  return (
    <div className={styles.container}>

      <Cards dogs={currentDogs} />
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        paginate={paginate}
        currentPage={currentPage}
        allDogs={allDogs}
      />
    </div>
  );
};

export default Home;
