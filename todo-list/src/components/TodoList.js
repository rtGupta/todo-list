import React from 'react';
import APIHelper from './../api/APIHelper';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const fetchTodoList = async() => {
            const todos = await APIHelper.fetchTodos();
            this.setState({ todos: todos});
        }

        fetchTodoList();
    }

    async markTodoComplete(id) {
        const payload = {
            completed: !this.state.todos?.find(todo => todo.id === id).completed
        };
        const updatedTodo = await APIHelper.updateTodo(id, payload);
        const updatedTodos = this.state.todos.map(todo => (todo.id === id) ? updatedTodo : todo);
        this.setState({
            todos: updatedTodos
        });
    }

    async deleteTodo(id) {
        try {
            const response = await APIHelper.deleteTodo(id);
            const remainingTodos = this.state.todos.filter((todo) => todo.id !== id);
            this.setState({
                todos: remainingTodos
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const todoList = this.state.todos?.map((todo, i) => (
            <TodoItem 
                key={todo.id} 
                todo={todo}
                markTodoComplete={this.markTodoComplete.bind(this)}
                deleteTodo={this.deleteTodo.bind(this)}
            />
        ));

        return (
            <div className='content'>
                <div id='todos'>
                    <div className='all-tasks-header'>
                        <h3>TODO's</h3>
                        <button id='add-btn'>
                            <img src={require('./../assets/add-task.png')} alt='Add Task' />
                        </button>
                    </div>
                    <hr />
                    <div id='todo-list'>
                        <ul id='todo-ul'>
                            {todoList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;