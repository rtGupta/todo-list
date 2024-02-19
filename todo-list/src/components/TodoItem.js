import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className='todo-item-li'>
                <div className='item-card'>
                    <div className='item-content'>
                        <input id={this.props.todo?.id} type="checkbox" />
                        <label className='todo-label' htmlFor={this.props.todo?.id}>{this.props.todo?.title}</label>
                    </div>
                    <div className='button-group'>
                        <button type='button'>
                            <img src={require('./../assets/view-icon.png')} alt='View Todo' />
                        </button>
                        <button>
                            <img src={require('./../assets/delete-icon.png')} alt='Delete Todo' />
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default TodoItem;