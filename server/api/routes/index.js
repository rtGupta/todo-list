const todosRouter = require('./todos-router');

module.exports = (app) => {
    app.use('/', todosRouter);
}