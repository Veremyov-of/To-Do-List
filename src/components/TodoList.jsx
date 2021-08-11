import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
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
    
    const percents = useSelector(state => state.todoPercent.percents);
    const indexItem = todoItems.indexOf(items);


    const calcPercent = () => {
        const sizeTasks = todoItems[indexItem].task.length;
        const onePercent = 100 / sizeTasks;
        let madeTasks = 0;
        for(let i = 0; i < sizeTasks; i++) {
            // console.log(items.task[i].performance);
            if(items.task[i].performance) {
                madeTasks += 1;
            }

        }
        if(madeTasks > 0) {
            const finalPercent = Math.round(madeTasks * onePercent);
            dispatch({type: "UPDATE_PERCENT", payload: finalPercent})
        } else {
            dispatch({type: "ZEROING_PERCENT", payload: 0})
            
        }
    }

    useEffect(() => {
        calcPercent();
        console.log(percents);
    })

    return (
        <div>
            <div className="container_todolist">
                <h1 className="title_todolist">{name}</h1>
                <form className="form_todolist" onSubmit={handleClick}>
                    <input className="input_todolist" placeholder="Task" value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_todolist" onClick={handleClick}>+</button>
                    <h1>{percents}</h1>
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