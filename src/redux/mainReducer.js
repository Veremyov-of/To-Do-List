const initialState = {
    todoItems: [
        {
            name: 'work',
            task: ['buy icecream', 'buy cake', 'buy meet']
        },
        {
            name: 'home',
            task: ['homework']
        }, 
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_LIST":
            return {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
        case "DELETE_LIST":
            return {
                ...state,
                todoItems: action.payload
            }
        case "ADD_TODO":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newState = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newState.push(state.todoItems[i])
            }
            state.todoItems = newState;
            return state;
        case "DELETE_TODO":
            return {
                ...state,
                todoItems: action.payload
            }
        default:
            return state
    }
}
export default reducer;