import React, { useState } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

const App = observer(() => {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            todoStore.addTodoItem(inputValue);
            setInputValue("");
        }
    };

    return (
        <div>
            <h1>My Todo List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => todoStore.removeLastItem()}>Remove Last</button>
            <button onClick={() => todoStore.removeFirstItem()}>Remove First</button>
            
            <ul>
                {todoStore.todos.map((todo, index) => (
                    <li 
                        key={index} 
                        style={{ 
                            backgroundColor: todo.completed ? 'gray' : (index % 2 === 0 ? 'lightblue' : 'lightgreen') 
                        }}
                    >
                        {todo.text}
                        <button onClick={() => todoStore.completeTodoItem(index)}>Complete</button>
                        <button onClick={() => todoStore.removeTodoItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default App;