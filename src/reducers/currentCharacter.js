const currentCharacter = (characters = [], action) => {
    switch(action.type){
        case 'CURRENT_CHARACTER' : return action.payload;
        case 'CHARACTER_PROFILE' : return characters.filter(character => character.name === action.payload);
        default : return characters;
    }
}

export default currentCharacter;