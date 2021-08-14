const characterReducer = (characters = [], action) => {
    switch(action.type){
        case 'ALL_CHARACTERS' : return action.payload;
        case 'SEARCHED_CHARACTER' : 
            var regex = new RegExp(`${action.payload}`, `i`);
            var res = characters.filter(character => character.name.match(regex)); 
            return [...res];
        case 'CATEGORY_CHARACTER' : let rex = characters.filter(character => {
            return action.payload.every(item => character.category.includes(item))
        }); return [...rex];
        default : return characters;
    }
}

export default characterReducer;