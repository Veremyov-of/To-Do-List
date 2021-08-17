import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function TodoList({name, items}) {
    const dispatch = useDispatch();
    const todoItems = useSelector(state => state.mainReducer.todoItems);
    const indexItem = todoItems.indexOf(items);
    const addTodo = (text) => {
        if(text !== '') {
            const index = todoItems.indexOf(items);
            todoItems[index].task.push({text: text, performance: false});
            const newTodoItem = todoItems[index];
            const item = {
                newTodoItem
            }
            dispatch({type: "ADD_TODO", payload: item});
            calcPercent();
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
        calcPercent();
    }

    const performed = (item) => {
        const indexMain = todoItems.indexOf(items);
        const indexItem = items.task.indexOf(item);
        if(todoItems[indexMain].task[indexItem].performance) {
            todoItems[indexMain].task[indexItem].performance = false;
        } else {
            todoItems[indexMain].task[indexItem].performance = true;
        }
        dispatch({type: "PERFORMED_TODO", payload: todoItems});
        calcPercent();
    }
    
     const calcPercent = () => {
        const sizeTasks = todoItems[indexItem].task.length;
        const onePercent = 100 / sizeTasks;
        let madeTasks = 0;
        for(let i = 0; i < sizeTasks; i++) {
            if(items.task[i].performance) {
                madeTasks += 1;
            }
        }
        if(madeTasks > 0) {
            const finalPercent = Math.round(madeTasks * onePercent);
            const newState = todoItems;
            newState[indexItem].percent = finalPercent;
            dispatch({type: "UPDATE_PERCENT", payload: newState});
        } else {
            const newState = todoItems;
            newState[indexItem].percent = 0;
            dispatch({type: "ZEROING_PERCENT", payload: newState});
        }
    }
    
    const deleteEverything = () => {
        todoItems[indexItem].task = [];
        dispatch({type: "ZEROING_PERCENT", payload: todoItems});
        calcPercent();
    }


    return (
        <div>
            <div className="container_todolist">
                <div className="title_todolist"><h1>{name}</h1></div>
                <form className="form_todolist" onSubmit={handleClick}>
                    <input className="input_todolist" maxLength="30" placeholder="Task" title="max 30 chars" value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_todolist" onClick={handleClick}>+</button>
                </form>
                <div className="inner_todo">
                    <div className="percent_todo">{`${todoItems[indexItem].percent}%`}</div>
                    <button onClick={deleteEverything} className="delete_everything">Delete Everything</button>
                </div>
                <div className="home"><Link className="home_link" to='/'>link</Link></div>
            </div>
            <div className="container_items">
                {items.task.map((item, index) =>
                    <div className={`${item.performance ? 'block_active' : ''} task_block`} key={index}>
                        <div className={`${item.performance ? 'performed' : ''} task_name`} ><span>{item.text}</span></div>
                        <div className="task_btn">
                            <button className={`task_performed ${item.performance ? 'active' : ''}`} onClick={() => performed(item)}></button>
                            <button className="task_delete" onClick={() => deleteTodo(item)}></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TodoList;