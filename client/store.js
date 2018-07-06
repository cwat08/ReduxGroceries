
import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'

//Action Types

const ADD_GROCERY = 'ADD_GROCERY';

//Action Creator

let nextId = 0

export const addGrocery = (string) => (
  {
    type: ADD_GROCERY,
    id: nextId++,
    string
  }
);

const reducer = (state = {groceries: []}, action) => {
  switch (action.type) {
    case ADD_GROCERY: {
      const newItem = {id: action.id, string: action.string, bought: false};
      const newState = {...state, groceries: [...state.groceries, newItem]};
      console.log(newState)
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

store.dispatch(addGrocery('Milk'));
store.dispatch(addGrocery("Cookies"));

export default store;
