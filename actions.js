import types from '/actionTypes.js'

const  actions = {
  addTodo: (text) => ({
			type: types.ADD_TODO,
			text
	}),

	deleteTodo: (id) => {
		return {
			type: types.DELETE_TODO,
			id
    }
  }
};

export default actions;