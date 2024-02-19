import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles/main.scss';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    )
  }
}

export default App;