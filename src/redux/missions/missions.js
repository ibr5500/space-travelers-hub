import axios from 'axios';

const GET_DATA = 'GET_DATA';
const JOIN = 'SPACE_TRAVELERS_HUB/redux/JOIN';
const LEAVE = 'SPACE_TRAVELERS_HUB/redux/LEAVE';
const baseURL = 'https://api.spacexdata.com/v3/missions';
const missions = [];

export const joinMission = (id) => (dispatch) => dispatch({
  type: JOIN,
  payload: id,
});

export const leaveMission = (id) => (dispatch) => dispatch({
  type: LEAVE,
  payload: id,
});

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
        image: mission.flickr_images,
        join: false,
      }));

    case JOIN:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return { ...mission };
        }
        return { ...mission, joined: true };
      });

    case LEAVE:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: false };
        }
        return { ...mission };
      });
    default:
      return state;
  }
};

export default missionsReducer;
