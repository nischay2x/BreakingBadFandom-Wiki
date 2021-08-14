import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCharacters } from '../actions/characters';

const Header = () => {

    const dispatch = useDispatch()
    const handleReload = () => {
        dispatch(getAllCharacters())
    }

    return(
        <header>
            <div className="p-2 px-4">
            <img src="./media/Logo_Breaking_Bad.png" alt="Logo" width='100'/>
            <Link to='/' onClick={handleReload} title='Home'><i className="fas fa-home fa-2x text-dark"></i></Link>
            </div>
        </header>
    )
}

export default Header;