const ADD_ROCKET = 'ADD_ROCKET';
const Rockets = [];

const rocketsReducer = (state = Rockets, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, 'new_Rocket'];
    default:
      return state;
  }
};

export default rocketsReducer;
