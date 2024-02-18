const todoService = require('./../services/todos-service');

/**
 * Method to send error upon request failure.
 * @param {*} err 
 * @param {*} response 
 */
const setErrorResponse = (err, response) => {
    response.status(500);
    response.json(err);
}

/**
 * Method to send data upon successful handling of the request.
 * @param {*} obj 
 * @param {*} response 
 */
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

/**
 * Creates a new Todo item.
 * @param {*} request 
 * @param {*} response 
 */
const post = async (request, response) => {
    try {
        const payload = request.body;
        const todo = await todoService.save(payload);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Fetches all todos matching the given title and description
 * @param {*} request 
 * @param {*} response 
 */
const index = async (request, response) => {
    try {
        const title = request.query.title;
        const description = request.query.description;
        const query = {};

        if (title) {
            query.title = title;
        }

        if (description) {
            query.description = description;
        }

        const todos = await todoService.search(query);
        setSuccessResponse(todos, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Fetches a single todo item by id.
 * @param {*} request 
 * @param {*} response 
 */
const get = async (request, response) => {
    try {
        const todoId = request.params.id;
        const todo = await todoService.get(todoId);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Updates a single todo after finding it by id.
 * @param {*} request 
 * @param {*} response 
 */
const update = async (request, response) => {
    try {
        const todoId = request.params.id;
        const updatedTodo = { 
            ...request.body, 
            id: todoId 
        };
        const todo = await todoService.update(updatedTodo);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

/**
 * Deletes the todo item by given id.
 * @param {*} request 
 * @param {*} response 
 */
const remove = async (request, response) => {
    try {
        const todoId = request.params.id;
        const todo = await todoService.remove(todoId);
        setSuccessResponse(todo, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

module.exports.post = post;
module.exports.index = index;
module.exports.get = get;
module.exports.update = update;
module.exports.remove = remove;