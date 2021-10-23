function isEmpty(quote) {
    if (quote.length === 0) {
        return "Preencha o campo corretamente"
    }

    return invertQuote(quote)
}

function invertQuote(quote){
    const invertedQuote = quote.split('').reverse().join('')
    return invertedQuote;
}

export default isEmpty