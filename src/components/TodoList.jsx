import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function TodoList({name, items}) {
    const dispatch = useDispatch();
    const todoItems = useSelector(state => state.mainReducer.todoItems);

    // const addTodo = (text) => {
    //     if(text !== '') {
    //         const index = todoItems.indexOf(items);
    //         todoItems[index].task.push(text);
    //         const newTodoItem = todoItems[index];
    //         const item = {
    //             newTodoItem
    //         }
    //         dispatch({type: "ADD_TODO", payload: item})
    //     }
    // }
    

    const addTodo = (text) => {
        if(text !== '') {
            const index = todoItems.indexOf(items);
            todoItems[index].task.push({text: text, performance: false});
            const newTodoItem = todoItems[index];
            const item = {
                newTodoItem
            }
            dispatch({type: "ADD_TODO", payload: item})
        }
    }
    const [value, setValue] = useState("");
    const handleClick = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    const deleteTodo = (item) => {
        let itemDelet = items.task.indexOf(item);
        items.task.splice(itemDelet, 1);
        dispatch({type: "DELETE_TODO", payload: items});
    }

    const performed = (item) => {
        const indexMain = todoItems.indexOf(items);
        const indexItem = items.task.indexOf(item);
        if(todoItems[indexMain].task[indexItem].performance) {
            todoItems[indexMain].task[indexItem].performance = false;
        } else {
            todoItems[indexMain].task[indexItem].performance = true;
        }
        dispatch({type: "PERFORMED_TODO", payload: todoItems})
    }

    return (
        <div>
            <h1>{name}</h1>
            <form onSubmit={handleClick}>
                <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                <button onClick={handleClick}>add task</button>
            </form>
            {items.task.map((item, index) =>
                <div style={{display: 'flex'}} key={index}>
                    <div className={item.performance ? 'test' : ''}>{item.text}</div>
                    <button onClick={() => performed(item)}>performed</button>
                    <button onClick={() => deleteTodo(item)}>delete task</button>
                </div>
            )}
            <div><Link to='/'>Home</Link></div>
        </div>
    );
}
export default TodoList;