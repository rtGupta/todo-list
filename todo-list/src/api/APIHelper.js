const API_URL = 'http://localhost:9001/todos/';

/**
 * Fetch all todos items from the server.
 * @returns an array of todo items;
 */
const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const todos = await response.json();
    return todos;
}

const updateTodo = async (id, updatedTodo) => {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo)
    }
    const response = await fetch(API_URL + id, options);
    const data = await response.json();
    return data;
}

const deleteTodo = async (id) => {
    const options = {
        method: 'DELETE',   
    }

    const response = await fetch(`${API_URL}${id}`, options);
    const data = await response.json();
    return data;
}
export default { fetchTodos, updateTodo, deleteTodo };