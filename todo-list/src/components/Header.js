import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={require('./../assets/todo_icon.png')} alt='Todo App Logo' />
                <h1 className='title'>TODO List</h1>
            </div>
        )
    }
}

export default Header;