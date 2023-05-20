import { ActionTypes } from "../action-types/action-types";
import axios from "axios";
const URL_BASE = "http://localhost:3001/dogs";

export const details = (detailID) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL_BASE}/${detailID}`);

      dispatch({
        type: ActionTypes.DETAILS,
        payload: data,
      });
    } catch (error) {
      console.error("Details" + error.message);
    }
  };
};

export const searchBreed = (value) => {
  return {
    type: ActionTypes.SEARCH_BREED,
    payload: value,
  };
};

export const searchTemperament = (value) => {
  return {
    type: ActionTypes.SEARCH_TEMPERAMENT,
    payload: value,
  };
};

export const filterByTemperament = (value) => {
  return {
    type: ActionTypes.FILTER_BY_TEMPERAMENT,
    payload: value,
  };
};

export const orderByAlphabet = (value) => {
  return {
    type: ActionTypes.ORDER_BY_ALPHABET,
    payload: value,
  };
};

export const orderWeightMax = () => {
  return {
    type: ActionTypes.ORDER_BY_WEIGHT_MAX,
  };
};

export const orderWeightMin = () => {
  return {
    type: ActionTypes.ORDER_BY_WEIGHT_MIN,
  };
};

export const postDog = (dog) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL_BASE}`, dog);

      dispatch({
        type: ActionTypes.POST_DOG,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const getAllDogs = () => {
  return async (dispatch) => {
    const { data } = await axios(URL_BASE);
    dispatch({
      type: ActionTypes.GET_ALL_DOGS,
      payload: data,
    });
  };
};

export const getByBreed = (breed) => {
  return async (dispatch) => {
    const { data } = await axios(`${URL_BASE}?name=${breed}`);
    dispatch({
      type: ActionTypes.GET_BY_BREED,
      payload: data,
    });
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    const { data } = await axios("http://localhost:3001/temperaments");
    dispatch({
      type: ActionTypes.GET_TEMPERAMENTS,
      payload: data,
    });
  };
};

export const cleanDetail = () => {
  return { type: ActionTypes.CLEAN_DETAIL };
};