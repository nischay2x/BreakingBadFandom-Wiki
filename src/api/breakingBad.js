import axios from 'axios';

export const getAllCharacters = () => axios.get('https://breakingbadapi.com/api/characters')
export const getCharactersByName = (name) => axios.get(`https://breakingbadapi.com/api/characters?name=${name}`)
export const getCharactersByCategory = (category) => axios.get(`https://breakingbadapi.com/api/characters?category=${category}`)
export const getCharacterQuotes = () => axios.get(`https://breakingbadapi.com/api/quotes`)

