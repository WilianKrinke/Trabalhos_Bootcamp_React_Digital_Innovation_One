import typeActions from '../typeActions/typeActions'

export const increment = () => ({
    type: typeActions.INCREMENT
})

export const decrement = () => ({
    type: typeActions.DECREMENT
})

export const changeQuote = (quote) => ({
    type: typeActions.CHANGE_STRING,
    payload: {quote}
})