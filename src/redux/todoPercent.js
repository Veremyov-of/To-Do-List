const defaultState = {
    percents: []
}

const todoPercent = (state = defaultState, action) => {
    switch(action.type) {
        case "ZEROING_PERCENT": {
            return {
                ...state,
                percents: action.payload
            } 
        }
        case "UPDATE_PERCENT":
            return {
                ...state,
                percents: action.payload
            }
        default:
            return state
    }
}
export default todoPercent;