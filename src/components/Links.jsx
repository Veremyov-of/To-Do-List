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
                task: []
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

    return (
        <div>
            <div className="container_block">
                <h1 className="title">To Do List</h1>
                <form className="form_group" onSubmit={handleClick}>
                    <input className="input_group" placeholder='Name Group' value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button className="btn_group" onClick={handleClick}>Add Group</button>
                </form>
            </div>
            {todoItems.length > 0 ?
            <div>
                {todoItems.map((item, index) => 
                <div key={index} className="link_block">
                    <div className="link"><Link className="link_text" to={`${item.name}`}>{item.name}</Link></div>
                    <div className="delete_link"><button onClick={() => deleteList(item)}></button></div>
                </div>
                )}
            </div>
            :
            <div>
                <h2>Сreate a new list</h2>
            </div>
            }
        </div>
    );
}

export default Links;