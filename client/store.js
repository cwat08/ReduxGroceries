
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
      return newState;
    }
    default: {
      return state;
    }
  }
};
