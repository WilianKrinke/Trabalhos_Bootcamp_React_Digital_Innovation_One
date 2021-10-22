import {createSlice} from '@reduxjs/toolkit'

export const changeSentence = createSlice({
    name: 'sentence',

    initialState: {
        value: 'First Sentence'
    },

    reducers:{
        changeString: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeString} = changeSentence.actions;
export default changeSentence.reducer;