import React, { useState } from 'react';

function Todo({todos, completeToDo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })
    console.log("avinash");
    console.log(todos);

    return todos.map((todo, index) => {
        { console.log(todo.text); }
        return(
            <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} key={index}>
                <div key = {todo.id} onClick ={()=>completeToDo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <i className=" icon edit"></i>
                    <i className="icon window close"></i>
                </div>
            </div>
        )
    })
}

export default Todo
