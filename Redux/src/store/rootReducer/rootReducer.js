import {combineReducers} from 'redux'
import {counterNumber,sentenceString,turnOffOrOn} from '../reducers/reducers'

export default combineReducers({
    counterNumber,
    sentenceString,
    turnOffOrOn,
})