const mongoose = require('mongoose');

// Schema lets us define structure of our JSON document.
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    description: {
        type: String
    },
    dueDate: {
        type: String,
        default: new Date().toDateString()
    },
    dueTime: {
        type: String,
        default: new Date().toTimeString()
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false }); // removes _v property when creating a record
// Active Record Pattern - the model already has a bunch of functions we can call on the model - e.g. find(), remove(), deleteOne(), etc.
// Data Mapper Pattern - we create a separate data access layer for every model we have, and all the operations on the model are implemented there


Schema.virtual('id', () => this._id.toHexString());
Schema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', Schema);

module.exports = model;