import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const GET_DATA = 'GET_DATA';
const baseURL = 'https://api.spacexdata.com/v3/rockets';
const Rockets = [];

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
    default:
      return state;
  }
};

export default rocketsReducer;
