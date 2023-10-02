const initialState = {
    team: [], // Array to store team members
  };
  
  const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_TEAM':
        return { ...state, team: action.payload };
      default:
        return state;
    }
  };
  
  export default teamReducer;
  