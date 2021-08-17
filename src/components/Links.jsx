import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Links() {
    const dispatch = useDispatch();
    const todoItems = useSelector(state => state.mainReducer.todoItems);
    const addList = (name) => {
        if(name !== '') {
            const item = {
                name,
                task: [],
                percent: 0,
                popUp: false,
                popUpColor: 'pop-up_color_starting',
            }
            dispatch({type: "ADD_LIST", payload: item})
        }   
    }

    const deleteList = (item) => {
        const lists = [...todoItems];
        let itemDelete = lists.indexOf(item);
        if(lists.includes(item)) {
            lists.splice(itemDelete, 1);
        }
        dispatch({type: "DELETE_LIST", payload: lists})
    }
    
    const [value, setValue] = useState("");
    const handleClick = e => {
        e.preventDefault();
        if (!value) return;
        addList(value);
        setValue("");
      };


    const popUp = (item) => {
        const indexMain = todoItems.indexOf(item);
        if(todoItems[indexMain].popUp) {
            todoItems[indexMain].popUp = false;
        } else {
            todoItems[indexMain].popUp = true;
        }
        dispatch({type: "POP_UP", payload: todoItems})
    }

    const switchColor = (color, item) => {
        const indexMain = todoItems.indexOf(item);
        switch(color) {
            case 'red':
                todoItems[indexMain].popUpColor = 'pop-up_color_red';
                todoItems[indexMain].popUp = false;
                dispatch({type: "SWITCH_COLOR", payload: todoItems})
            break;
            case 'blue':
                todoItems[indexMain].popUpColor = 'pop-up_color_blue';
                todoItems[indexMain].popUp = false;
                dispatch({type: "SWITCH_COLOR", payload: todoItems})
            break;
            case 'starting':
                todoItems[indexMain].popUpColor = 'pop-up_color_starting';
                todoItems[indexMain].popUp = false;
                dispatch({type: "SWITCH_COLOR", payload: todoItems})
            break;
            case 'green':
                todoItems[indexMain].popUpColor = 'pop-up_color_green';
                todoItems[indexMain].popUp = false;
                dispatch({type: "SWITCH_COLOR", payload: todoItems})
            break;
            default:
                break;
        }
            

    }
    

    return (
        <div>
            <div className="container_block">
                <h1 className="title">To Do List</h1>
                <form className="form_group" onSubmit={handleClick}>
                    <input className="input_group" maxLength="30" placeholder='Name Group' value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_group" onClick={handleClick}>Add Group</button>
                </form>
            </div>
            {todoItems.length > 0 ?
            <div>
                {todoItems.map((item, index) => 
                <div key={index} className="transparent_block">
                    <div className={`link_block ${item.popUpColor}`}>

                    <button className="button_pop-up" onClick={() => popUp(item)}><div className={`pop-up_color ${item.popUpColor}`}></div></button>
                    <div className={`pop-up ${todoItems[index].popUp === true ? 'popActive': ''}`}>
                        <button onClick={() => switchColor('red',item)}><div className="button-pop-up pop-up_color_red"></div></button>
                        <button onClick={() => switchColor('blue',item)}><div className="button-pop-up pop-up_color_blue"></div></button>
                        <button onClick={() => switchColor('green',item)}><div className="button-pop-up pop-up_color_green"></div></button>
                        <button onClick={() => switchColor('starting',item)}><div className="button-pop-up pop-up_color_starting"></div></button>
                    </div>

                    <Link className="link" to={`${item.name}`}><div className="link_text" >{item.name}</div></Link>
                    <div className="delete_link"><button onClick={() => deleteList(item)}></button></div>
                    <div className="percent_link">{`${item.percent}%`}</div>
                </div>
                </div>
                )}
            </div>
            :
            <div className="title_create">
                <h2>Сreate a new list...</h2>
            </div>
            }
        </div>
    );
}

export default Links;