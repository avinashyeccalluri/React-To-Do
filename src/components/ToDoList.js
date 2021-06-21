import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function ToDoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        console.log(todo);
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
    };

    const completeToDo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }


    return (
        <div>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeToDo={completeToDo}></Todo>
        </div>
    )
}

export default ToDoList
