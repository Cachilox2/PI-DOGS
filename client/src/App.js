import "./App.css";
import { useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAllDogs,
  getTemperaments,
  getByBreed,
} from "./redux/actions/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./pages/Form/Form";
import DogDetail from "./components/DogDetail/DogDetail";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import NotFound from "./components/NotFound/NotFound";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const show = location.pathname !== "/";

  const allDogs = useCallback(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const allTemps = useCallback(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const onSearch = (race) => {
    dispatch(getByBreed(race));
  };

  useEffect(() => {
    allTemps();
    allDogs();
  }, [allDogs, allTemps]);

  return (
    <>
      {show && <Navbar onSearch={onSearch} />}
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/home"
            element={<Home allDogs={allDogs} allTemps={allTemps} />}
          />
          <Route path="/create" element={<Form />} />
          <Route path="/detail/:id" element={<DogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer className="toast" />
      </main>
      {show && <Footer />}
    </>
  );
}

export default App;
