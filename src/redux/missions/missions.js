import axios from 'axios';

const GET_DATA = 'GET_DATA';
const baseURL = 'https://api.spacexdata.com/v3/missions';
const missions = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}`);
  return dispatch({ type: GET_DATA, payload: res.data });
};

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
    default:
      return state;
  }
};

export default missionsReducer;
