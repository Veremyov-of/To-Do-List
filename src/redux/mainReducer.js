
const initialState = {
    todoItems: [
        {
            name: 'Work',
            task: [{ text: 'buy icecream', performance: false },
            { text: 'buy cake', performance: false},
            { text: 'buy meet', performance: false},
            { text: 'buy chocolate', performance: false },
            { text: 'buy milk', performance: false }],
            percent: 0,
            popUp: false,
            popUpColor: 'pop-up_color_starting',
            sorting: false,
            hide: false
        },
        {
            name: 'Home',
            task: [{ text: 'homework', performance: false }],
            percent: 0,
            popUp: false,
            popUpColor: 'pop-up_color_starting',
            sorting: false,
            hide: false
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
            const newStateAddTodo = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateAddTodo.push(state.todoItems[i])
            }
            state.todoItems = newStateAddTodo;
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
        case "UPDATE_PERCENT":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateUpDatePercent = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateUpDatePercent.push(state.todoItems[i])
            }
            state.todoItems = newStateUpDatePercent;
            return state;
        case "ZEROING_PERCENT":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateZeroingPercent = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateZeroingPercent.push(state.todoItems[i])
            }
            state.todoItems = newStateZeroingPercent;
            return state;
        case "POP_UP":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStatePopUp = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStatePopUp.push(state.todoItems[i])
            }
            state.todoItems = newStatePopUp;
            return state;
        case "SWITCH_COLOR":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateSwitchColor = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateSwitchColor.push(state.todoItems[i])
            }
            state.todoItems = newStateSwitchColor;
            return state;
        case "DELETE_EVERYTHING":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateDeleteEverything = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateDeleteEverything.push(state.todoItems[i])
            }
            state.todoItems = newStateDeleteEverything;
            return state;
        case "SORTING":
            state = {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    action.payload
                ]
            }
            const newStateSorting = []
            for(let i = 0; i < state.todoItems.length - 1; i++) {
                newStateSorting.push(state.todoItems[i])
            }
            state.todoItems = newStateSorting;
            return state;
        default:
            return state
    }
}
export default reducer;