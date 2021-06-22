import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function ToDoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
    };

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeToDo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const updateToDo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }


    return (
        <div>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeToDo={completeToDo} removeTodo={removeTodo} updateToDo = {updateToDo}></Todo>
        </div>
    )
}

export default ToDoList
