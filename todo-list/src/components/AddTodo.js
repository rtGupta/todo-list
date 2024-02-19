import React from "react";
import APIHelper from "../api/APIHelper";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: '',
                description: '',
                dueDate: '',
                dueTime: ''
            }
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        let todo = {
            ...this.state.todo,
            [name]: value
        }

        this.setState({ todo: todo });
    }

    async createTodo(e) {
        e.preventDefault();
        
        try {
            const addTodoHandler = this.props.addTodoHandler;
            if (this.state.todo.title == '') {
                alert('Invalid Input');
                return;
            }

            const newTodo = await APIHelper.addTodo(this.state.todo);
            addTodoHandler(newTodo);
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
            <div id='add-task-card' className="add-task">
                <h2>Add New Todo</h2>
                <label htmlFor="title">Title</label>
                <input 
                    type='text' 
                    name='title' 
                    id='title' 
                    value={this.state.todo.title} 
                    onChange={this.handleChange.bind(this)}
                    required
                />
                <label htmlFor="desc">Description</label>
                <input 
                    type='text' 
                    name='description' 
                    id='description' 
                    value={this.state.todo.description} 
                    onChange={this.handleChange.bind(this)}
                />
                <div className="form-control">
                    <div>
                        <label htmlFor="dueDate">Due Date</label>
                        <input 
                            type="date" 
                            name="dueDate" 
                            id="dueDate" 
                            value={this.state.todo.dueDate} 
                            onChange={this.handleChange.bind(this)}
                    />
                    </div>
                    <div>
                        <label htmlFor="dueTime">Due Date</label>
                        <input 
                            type="time" 
                            name="dueTime" 
                            id="dueTime" 
                            value={this.state.todo.dueTime} 
                            onChange={this.handleChange.bind(this)}
                    />
                    </div>
                </div>
                <div className="add-button-group">
                    <button id="save-btn" onClick={this.createTodo.bind(this)}>Save</button>
                    <button id="cancel-btn" onClick={() => this.props.cancel()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddTodo;