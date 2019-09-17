const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const input = document.querySelector('input');
const list = document.querySelector('ul');

function render() {
	//The store's reducing function will be called with the current getState()
	let todos = store.getState().todos;
	console.log('todos:',todos);

    var html = todos.map(function(todo) {
      return '<li id="' + todo.id + '">' +
				'<div class="view">' +

					'<label>' + todo.text + '</label>' +
					'<button class="destroy"></button>' +
				'</div>' +
              '</li>';
    }).join('');
    list.innerHTML = html;
}

input.addEventListener('change', function(e) {
	const value = e.target.value;
	console.log("value: ", value);
	store.dispatch(actions.addTodo(value));
 	e.target.value = '';
});

list.addEventListener('click', function(e) {
	let target = e.target, id;
		console.log('target:', target);
		console.log(target.tagName);
	if(target.tagName === "BUTTON") {
			id = target.parentNode.parentNode.id;
			console.log("id: ", id);
			store.dispatch(actions.deleteTodo(id));
	}
});

render();

//It will be called any time an action is dispatched, 
//and some part of the state tree may potentially have changed. 
store.subscribe(render);

