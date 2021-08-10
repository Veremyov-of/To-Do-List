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
        let a = lists.indexOf(item);
        if(lists.includes(item)) {
            lists.splice(a, 1);
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
            <form onSubmit={handleClick}>
                <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                <button onClick={handleClick}>add group</button>
            </form>
            {todoItems.length > 0 ?
            <div>
                {todoItems.map((item, index) => 
                <div key={index}>
                    <Link  to={`${item.name}`}>{item.name}</Link>
                    <button onClick={() => deleteList(item)}>delete</button>
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