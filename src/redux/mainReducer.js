
const initialState = {
    todoItems: [
        {
            name: 'Work',
            task: [{ text: 'buy icecream', performance: false },
            { text: 'buy cake', performance: false},
            { text: 'buy meet', performance: false }]
        },
        {
            name: 'Home',
            task: [{ text: 'homework', performance: false }]
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
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateDelete = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateDelete.push(state.todoItems[i])
            }
            state.todoItems = newStateDelete;
            return state;

        case "PERFORMED_TODO":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStatePerformed = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStatePerformed.push(state.todoItems[i])
            }
            state.todoItems = newStatePerformed;
            return state;
            
        default:
            return state
    }
}
export default reducer;