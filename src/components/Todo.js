import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo({todos, completeToDo,removeTodo, updateToDo}) {
    const [edit, setEdit] = useState(
        {}
        );
        console.log("main---------------------");
        console.log(edit);

        
        const setEditContent = (todo) => {
            setEdit(todo)
        }

        const cancelUpdate = ()=> setEdit({})

        const submitUpdate = (input)=> {
            updateToDo(edit.id, input);
            setEdit({});
        }
        
    if(edit.id){
        return <TodoForm edit= {edit} cancelUpdate = {cancelUpdate} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => {
        return(
            <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}>
                <div key = {todo.id} onClick ={()=>completeToDo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <i className=" icon edit edit-icon" onClick= {()=>setEditContent(todo)}></i>
                    {/*  */}
                    <i className="icon window close delete-icon" onClick= {()=> removeTodo(todo.id)}></i>
                </div>
            </div>
        )
    })
}

export default Todo
