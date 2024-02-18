const Todo = require('./../models/todo');

/**
 * Add a new todo
 * @param {*} newTodo 
 * @returns {Promise<Todo>} newly added todo item
 */
const save = (newTodo) => {
    const todo = new Todo(newTodo);
    return todo.save(); // returns a promise
}

/**
 * Get all todos
 * @param {*} query 
 * @returns {Promise<[Todo]>} Array of all todo items
 */
const search = (query) => {
    const params = { ...query };
    return Todo.find(params).exec(); // exec function returns the results as promise
}

/**
 * Find todo by id
 * @param {*} id 
 * @returns {Promise<Todo>} 
 */
const get = (id) => {
    const todo = Todo.findById(id);
    return todo;
}

/**
 * Update todo by id
 * @param {*} updatedTodo 
 * @returns {Promise<Todo>} updated Todo item
 */
const update = (updatedTodo) => {
    updatedTodo.lastModifiedDate = new Date();
    const todo = Todo.findByIdAndUpdate(updatedTodo.id, updatedTodo, {new: true}).exec();
    return todo;
}

/**
 * Remove a todo by id
 * @param {*} id 
 * @returns {Promise<Todo>} Deleted todo
 */
const remove = (id) => {
    const todo = Todo.findByIdAndDelete(id).exec();
    return todo;
}

module.exports.save = save;
module.exports.search = search;
module.exports.get = get;
module.exports.update = update;
module.exports.remove = remove;