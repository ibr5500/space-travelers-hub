const NEW_MISSION = 'NEW_MISSION';

const missions = [];

const missionsReducer = (state = missions, action) => {
  switch (action.type) {
    case NEW_MISSION:
      return [...state, 'new_mission'];
    default:
      return state;
  }
};

export default missionsReducer;
