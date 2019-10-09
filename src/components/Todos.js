import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
 render(){ 
      //tomo los todos los guardo en el array todo y los muestro en el h3
  return this.props.todos.map((todo)=>
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      //sale Hello 3 veces porque TodoItem llama al array todos que tiene 3 todos 
  );

}

}

// Proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
