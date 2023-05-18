import { ActionTypes } from "../action-types/action-types";

const initialState = {
  allDogs: [],
  dogs: [],
  temperaments: [],
  allTemperaments: [],
  breeds: [],
  dogDetails: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DETAILS:
      return {
        ...state,
        dogDetails: payload,
      };
    case ActionTypes.SEARCH_BREED:
      if (payload === "") return { ...state, breeds: state.allDogs };
      const breed = state.allDogs.filter((dog) => {
        return dog.name.toLowerCase().includes(payload.toLowerCase());
      });
      return { ...state, breeds: breed };
    case ActionTypes.SEARCH_TEMPERAMENT:
      if (payload === "")
        return { ...state, temperaments: state.allTemperaments };

      const temp = state.allTemperaments.filter((e) => {
        return e.name.toLowerCase().includes(payload.toLowerCase());
      });
      return { ...state, temperaments: temp };
    case ActionTypes.FILTER_BY_TEMPERAMENT:
      let filterTemperament = [];
      if (payload.length === 0) {
        return { ...state, dogs: state.allDogs };
      }
      state.allDogs.forEach((dog) => {
        if (dog.temperament) {
          let count = 0;
          payload.forEach((e) => {
            if (dog.temperament.includes(e)) {
              count++;
            }
          });
          if (count === payload.length) {
            filterTemperament.push(dog);
          }
        } else {
          return false;
        }
      });
      filterTemperament = filterTemperament.filter((e, i) => {
        return filterTemperament.indexOf(e) === i;
      });
      return { ...state, dogs: filterTemperament };
    case ActionTypes.FILTER_BY_BREED:
      if (payload.length === 0) {
        return { ...state, dogs: state.allDogs };
      }
      const filterBreed = state.allDogs.filter((e) => payload.includes(e.name));
      return { ...state, dogs: filterBreed };
    case ActionTypes.GET_ALL_DOGS:
      return {
        ...state,
        allDogs: payload,
        dogs: payload,
        breeds: payload,
      };
    case ActionTypes.GET_BY_BREED:
      return {
        ...state,
        dogs: payload,
      };
    case ActionTypes.GET_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
        temperaments: payload,
      };
    case ActionTypes.ORDER_BY_ALPHABET:
      const copy = [...state.dogs];
      const ordered = copy.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });
      if (payload === "Ascendent") {
        return { ...state, dogs: ordered };
      } else if (payload === "Descendent") {
        return { ...state, dogs: ordered.reverse() };
      }
      return state;
    case ActionTypes.ORDER_BY_WEIGHT_MIN:
      let orderMin = state.allDogs.sort(
        (a, b) => Number(a.weightMin) - Number(b.weightMin)
      );
      return { ...state, dogs: orderMin };
    case ActionTypes.ORDER_BY_WEIGHT_MAX:
      let orderMax = state.allDogs.sort(
        (a, b) => Number(b.weightMin) - Number(a.weightMin)
      );
      return { ...state, dogs: orderMax };
      
    default:
      return { ...state };
  }
};

export default reducer;
