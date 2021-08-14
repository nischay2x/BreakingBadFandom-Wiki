const quotesReducer = (quotes = [], action) => {
    switch(action.type){
        case 'ALL_QUOTES' : return action.payload;
        case 'SEARCHED_QUOTE' : 
            var regex = new RegExp(`${action.payload}`, `i`);
            var res = quotes.filter(quote => quote.quote.match(regex)); 
            return [...res];
        default : return quotes;
    }
}

export default quotesReducer;