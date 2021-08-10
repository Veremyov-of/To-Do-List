import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function TodoList({name, items}) {
    const dispatch = useDispatch();
    const todoItems = useSelector(state => state.mainReducer.todoItems);

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
            <div className="container_todolist">
                <h1 className="title_todolist">{name}</h1>
                <form className="form_todolist" onSubmit={handleClick}>
                    <input className="input_todolist" placeholder="Task" value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_todolist" onClick={handleClick}>+</button>
                </form>
                <div className="home"><Link className="home_link" to='/'>link</Link></div>
            </div>
            {items.task.map((item, index) =>
                <div className="task_block" key={index}>
                    <div className={`${item.performance ? 'performed' : ''} task_name`} >{item.text}</div>
                    <div className="task_btn">
                        <button className={`task_performed ${item.performance ? 'active' : ''}`} onClick={() => performed(item)}></button>
                        <button className="task_delete" onClick={() => deleteTodo(item)}></button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default TodoList;