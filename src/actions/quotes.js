import * as api from "../api/breakingBad";

export const getAllQuotes = () => async(dispatch) => {
    try {
        const {data} = await api.getCharacterQuotes()
        dispatch({type : 'ALL_QUOTES', payload : data})
    } catch (error) {
        console.log(error);
    }
}
