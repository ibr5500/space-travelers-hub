import axios from 'axios';

const GET_DATA = 'SPACE_TRAVELERS_HUB/redux/GET_DATA';
const RESERVE = 'SPACE_TRAVELERS_HUB/redux/RESERVE';
const CANCEL = 'SPACE_TRAVELERS_HUB/redux/CANCEL';
const baseURL = 'https://api.spacexdata.com/v3/rockets';
const Rockets = [];

export const reserveRocket = (id) => (dispatch) => dispatch({
  type: RESERVE,
  payload: id,
});

export const cancelReseve = (id) => (dispatch) => dispatch({
  type: CANCEL,
  payload: id,
});

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}`);
  return dispatch({ type: GET_DATA, payload: res.data });
};

const rocketsReducer = (state = Rockets, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        description: rocket.description,
        image: rocket.flickr_images,
        reserved: false,
      }));

    case RESERVE:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return { ...rocket };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
