import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCharacters, getCharactersByCategory, getCharactersByName } from '../actions/characters';

const SearchBar = (props) => {

    const dispatch = useDispatch();

    const [characterName, setCharacterName] = useState('')
    const [categories, setCategories] = useState([])
    const handleChange = (e) => {
        setCharacterName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (characterName) dispatch(getCharactersByName(characterName))
        else dispatch(getAllCharacters())
    }

    const handleCategoryFilter = (e) => {
        if(e.target.checked){
            if(!categories.includes(e.target.value)){
                setCategories([...categories, e.target.value])
            } 
        } else {
            setCategories(categories.filter(item => item !== e.target.value))
        }
    }

    const handleFilterSave = (e) => {
        e.preventDefault();
        if(categories.length) dispatch(getCharactersByCategory(categories))
        else dispatch(getAllCharacters())
    }


    return (
        <div id='search-bar'>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className='col-11 col-md-6 d-flex'>
                        <input type="text" className="form-control" placeholder='Search any Character' value={characterName} onChange={handleChange} />
                        <button type='submit' className='btn btn-dark'><i className='fa fa-search'></i></button>
                    </div>
                    <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#filter" aria-expanded="false" aria-controls="filter">
                        <i className="fas fa-sliders-h"></i>
                    </button>
                </div>
            </form>
            <div className="container mt-3">
                <div className="collapse col-12 col-md-5" id="filter">
                    <div className="card-header">
                        <h6>Category Filter</h6>
                        <button className="btn btn-warning btn-sm" type="button" 
                        data-toggle="collapse" data-target="#filter" aria-expanded="true" aria-controls="filter"
                        onClick={handleFilterSave}>Apply</button>
                    </div>
                    <div className="card-body mb-2">
                        <span>
                            <input type="checkbox" onChange={handleCategoryFilter} value='Breaking Bad' /> Breaking Bad
                        </span>
                        <span>
                            <input type="checkbox" onChange={handleCategoryFilter} value='Better Call Saul' /> Better Call Saul
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;