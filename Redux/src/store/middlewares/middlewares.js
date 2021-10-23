export function invertSentence(quote) {
    const noEmptyQuote = noEmpty(quote)
    return noEmptyQuote.split("").reverse().join("");
}

function noEmpty(quote) {
    if (quote.length === 0) {
        return "Preencha o campo corretamente"
    }
    return quote;
}