import {combineReducers} from 'redux'
import {counterNumber,sentenceString,turnOffOrOn, changeLoadingReducer} from '../reducers/reducers'

export default combineReducers({
    counterNumber,
    sentenceString,
    turnOffOrOn,
    changeLoadingReducer
})