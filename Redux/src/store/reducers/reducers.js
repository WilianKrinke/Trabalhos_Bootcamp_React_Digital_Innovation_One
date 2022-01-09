import initialStates from '../initialStates/initialStates'
import isEmpty from '../middlewares/middlewares'
import typeActions from '../typeActions/typeActions'

export const counterNumber = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.INCREMENT:
            return {
                ...state,
                number: state.number += 1
            }
        case typeActions.DECREMENT:
            return {
                ...state,
                number: state.number -= 1
            }
    
        default:
            return state;
    }
}

export const sentenceString = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_STRING:            
            return{
                ...state,
                quote: isEmpty(action.payload)
            }
    
        default:
            return state;
    }
}

export const turnOffOrOn = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.TURN_ON:            
            return{
                ...state,
                on: !state.on
            }
    
        default:
            return state;
    }
}

export const changeLoadingReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_LOADING: 
        
            console.log(action.payload)
            return{
                ...state,
                loading: action.payload.condition
            }
    
        default:
            return state;
    }
}

