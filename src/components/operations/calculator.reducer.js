import { GET_VALUE } from './calculator.actions';


const numberReducer = (state = 0, action ) => {
    switch ( action.type ) {
        case GET_VALUE:
            return {
                ...state,
                state:action.target.attributes.value.value,
            }
        default:
            return state;
    }
}

export default numberReducer;