const API_URL = 'http://localhost:9001/todos';

/**
 * Fetch all todos items from the server.
 * @returns an array of todo items;
 */
const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const todos = await response.json();
    return todos;
}

export default { fetchTodos };