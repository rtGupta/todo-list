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

    render() {
        const todoList = this.state.todos?.map((todo, i) => {
            return <TodoItem key={todo.id} todo={todo} />
        });

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