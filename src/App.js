import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import teamReducer from './reducers/teamReducer';
import AppNavigator from './navigation';

const rootReducer = combineReducers({
  users: userReducer,
  team: teamReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
