import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text : '');

    const inputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });

        setInput('');
      };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {
                    props.edit ? 
                    <>
                    <input
                        type="text"
                        className="todo-input"
                        name="text"
                        value={input}
                        placeholder="Enter a todo"
                        ref={inputRef}
                        onChange={ e => setInput(e.target.value)}
                    />
                    
                    <button type="submit" className="todo-button-edit" onClick = {handleSubmit}>Update To Do</button>
                    <button type="button" className="todo-button-edit" onClick= {()=>{props.cancelUpdate()}}>Cancel</button>
                    </>
                    :
                    <>
                    <input
                        type="text"
                        className="todo-input"
                        value={input}
                        name="text"
                        placeholder="Enter a todo"
                        ref={inputRef}
                        onChange={ e => setInput(e.target.value)}
                    />
                    <button type="submit" className="todo-button">Add to To list</button>
                    </>

                }
            </form>
        </div>
    )
}

export default TodoForm
