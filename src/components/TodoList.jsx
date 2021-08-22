import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import imgHide from "../img/hide.png";
import imgHideActive from "../img/hideActive.png";

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
    
    const clearList = () => {
        todoItems[indexItem].task = [];
        dispatch({type: "UPDATE", payload: todoItems});
        calcPercent();
    }

    const clearCompleted = () => {
        let indexTask = [];
        for(let i = 0; i < todoItems[indexItem].task.length; i++){
            if(!todoItems[indexItem].task[i].performance) {
                indexTask.push(todoItems[indexItem].task[i]);
            }
        }
        todoItems[indexItem].task = indexTask;
        dispatch({type: "UPDATE", payload: todoItems});
        calcPercent();
    }

    const sortingTodos = () => {
        if(todoItems[indexItem].sorting) {
            todoItems[indexItem].sorting = false;
        } else {
            todoItems[indexItem].sorting = true;
        }
        dispatch({type: "SORTING", payload: todoItems});
        calcPercent();
    }
    
    const hideToggle = () => {
        if(todoItems[indexItem].hide) {
            todoItems[indexItem].hide = false;
        } else {
            todoItems[indexItem].hide = true;
        }
        dispatch({type: "UPDATE", payload: todoItems});
    }


    return (
        <div>
            <div className={`hide_menu ${todoItems[indexItem].hide ? 'hide_menu_active' : ''}`}>
                <div className="home"><Link className="home_link" to='/'>link</Link></div>
                <button onClick={clearList} className="hide_clear">Clear List</button>
                <div className="hide_percent">{`${todoItems[indexItem].percent}%`}</div>
                <button onClick={clearCompleted} className="hide_clear">Clear Completed</button>
                <button onClick={hideToggle} className="hideActive"><img className="hide_imgActive" src={imgHideActive}/></button>
            </div>
            <div className={`container_todolist ${todoItems[indexItem].hide ? 'container_todolist_hide' : ''}`}>
                <div className="title_todolist"><h1>{name}</h1></div>
                <form className="form_todolist" onSubmit={handleClick}>
                    <input className="input_todolist" maxLength="30" placeholder="Task" title="max 30 chars" value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_todolist" onClick={handleClick}>+</button>
                </form>
                <div className="inner_todo">
                    <button onClick={clearList} className="delete_everything">Clear List</button>
                    <button onClick={clearCompleted} className="delete_everything">Clear Completed</button>
                    <div className="percent_todo"
                        style={todoItems[indexItem].percent === 0 ? {background: '#ff6d6d9b'} :
                        todoItems[indexItem].percent >= 80 ? {background: '#bbff6d9b'} :
                        todoItems[indexItem].percent >= 50 ? {background: '#e9ff6d9b'} :
                        todoItems[indexItem].percent >= 20 ? {background: '#ffd86d9b'}  : ''
                    }
                    >
                            {`${todoItems[indexItem].percent}%`}
                    </div>
                    <button className={`sorting ${todoItems[indexItem].sorting ? 'sorting_active' : ''}`} onClick={sortingTodos}></button>
                    <button className="hide" onClick={hideToggle}><img className="hide_img" src={imgHide}/></button>
                </div>
                <div className="home"><Link className="home_link" to='/'>link</Link></div>
            </div>
            <div className={`container_items ${todoItems[indexItem].sorting ? 'container_items_active' : ''}`}>
                {items.task.map((item, index) =>
                    <div className={`${item.performance ? 'block_active' : ''} task_block`} key={index}>
                        <div className={`${item.performance ? 'performed' : ''} task_name`} ><span>{item.text}</span></div>
                        <div className="task_btn">
                            <button className={`${item.performance ? 'active' : ''} task_performed`} onClick={() => performed(item)}></button>
                            <button className="task_delete" onClick={() => deleteTodo(item)}></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TodoList;