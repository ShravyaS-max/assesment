const initialState = {
    users: [], // Array to store users
    filters: {}, // Object to store filters
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return { ...state, users: action.payload };
      case 'SET_FILTERS':
        return { ...state, filters: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  