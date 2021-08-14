import * as api from '../api/breakingBad'

var localList = [];

export const getAllCharacters = () => async(dispatch) => {
    if(localList.length){
        dispatch({type: 'ALL_CHARACTERS', payload : localList})
    } else {
        try {
            const {data} = await api.getAllCharacters();
            localList = data;
            dispatch({type : 'ALL_CHARACTERS', payload : data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCharactersByName = (name) => async(dispatch) => {
    dispatch({type : 'SEARCHED_CHARACTER', payload : name})
}

export const getCharacterProfile = (name) => async(dispatch) => {
    if(localList.length){
        const info = localList.filter(chars => chars.name === name)
        dispatch({type : 'CURRENT_CHARACTER', payload : info})
    } else {
        try {
            const {data} = await api.getCharactersByName(name);
            dispatch({type : 'CURRENT_CHARACTER', payload : data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCharactersByCategory = (category) => async(dispatch) => {
    dispatch({type: 'CATEGORY_CHARACTER', payload : category})
}

// export const getCharacter = (who) => async(dispatch) => {
//     let select = null;
//     let regex = new RegExp(who, 'i')
//     if(localList.length){
//         select = localList.find(chars => chars.name.match(regex))
//         console.log(select);
//         dispatch({type : 'CURRENT_CHARACTER', payload : select})
//     } else {
//         await getAllCharacters()
//         select = localList.find(chars => chars.name.match(regex))
//         console.log(select);
//         dispatch({type : 'CURRENT_CHARACTER', payload : select})
//     }
// }