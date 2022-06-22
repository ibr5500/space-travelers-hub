import axios from 'axios';

const GET_DATA = 'GET_DATA';

const baseURL = 'https://api.spacexdata.com/v3/missions';
const NEW_MISSION = 'NEW_MISSION';

const missions = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}`);
  return dispatch({ type: GET_DATA, payload: res.data });
};
const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case NEW_MISSION:
      return [...state, 'new_mission'];
    case GET_DATA:
      return;
      action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
    default:
      return state;
  }
};

export default missionsReducer;
