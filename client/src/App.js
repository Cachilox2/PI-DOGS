import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { getAllDogs, getTemperaments, getByBreed } from "./redux/actions/actions";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  const location = useLocation();
  const showNav = location.pathname !== "/";

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const allDogs = useCallback(() => {
    dispatch(getAllDogs());
  }, [dispatch])

  useEffect(() => {
    dispatch(getTemperaments());
    allDogs();
  }, [allDogs, dispatch]);

  const onSearch = (race) => {
    dispatch(getByBreed(race))
  } 

  return (
    <div className="App">
      {showNav && <Navbar onSearch={onSearch} paginate={paginate} />}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route 
          path="/home" 
          element={
            <Home
              currentPage={currentPage}
              dogsPerPage={dogsPerPage} 
              currentDogs={currentDogs}
              paginate={paginate}
              dogs={dogs} 
              allDogs={allDogs} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
