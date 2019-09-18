import types from '/actionTypes.js'

const  initialState = [
  {
    text: 'Learn Redux',
    id: 0
  },
  {
    text: 'Learn WebSockets',
    id: 1
  }
];

const todos = (state, action) => {
   state = state || initialState;

  switch (action.type) {
    case types.ADD_TODO:
      state.push({
          id: state.length ? state.reduce((maxId, todo) => { 
            return Math.max(todo.id, maxId); }, -1) + 1 : 0,
             text: action.text
        });
      return state;
    case types.DELETE_TODO:
      return state.filter((todo) =>{
        return todo.id !== parseInt(action.id, 10);
      });
    default:
      return state
  }
}

let rootReducer = Redux.combineReducers({ todos });

export default rootReducer;

