import styles from "./Home.module.css"

import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import OrderBy from "../../components/OrderBy/OrderBy";
import Filter from "../../components/Filter/Filter";

const Home = ({
  dogs,
  allDogs,
  currentPage,
  dogsPerPage,
  currentDogs,
  paginate,
  orderBy,
  filter
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <OrderBy orderBy={orderBy} />
        <Filter filter={filter} paginate={paginate}/>
      </div>

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
