const defaultState = {
    todos: []
}

const TodoReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todoItems: action.payload
            }
        default:
            return state
    }
}
export default TodoReducer;