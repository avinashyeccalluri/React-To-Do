import React, {useState, useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");

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
                <input
                    type="text"
                    className="todo-input"
                    name="text"
                    value={input}
                    placeholder="Enter a todo"
                    onChange={ e => setInput(e.target.value)}
                />
                <button type="submit" className="todo-button">Add to todo</button>
            </form>
        </div>
    )
}

export default TodoForm
