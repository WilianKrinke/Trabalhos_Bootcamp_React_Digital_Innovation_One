import {createSlice} from '@reduxjs/toolkit'
import {invertSentence} from '../middlewares/middlewares'

export const changeSentence = createSlice({
    name: 'sentence',

    initialState: {
        value: 'First Sentence'
    },

    reducers:{
        changeString: (state, action) => {
            state.value = invertSentence(action.payload)
        }
    }
})

export const {changeString} = changeSentence.actions;
export default changeSentence.reducer;