import { legacy_createStore as createStore } from 'react-redux';

const globalReducer = (state, action) => {
  return state;
};

export const myStore = createStore(globalReducer); //redux store ile değiştirin
