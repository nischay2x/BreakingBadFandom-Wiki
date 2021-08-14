import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import CharacterProfile from './components/CharacterProfile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCharacters } from './actions/characters';
import { getAllQuotes } from './actions/quotes';

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(getAllQuotes())
    }, [dispatch])

    return(
        <>
            <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}></Route>
            <Route path='/:who'>
                <CharacterProfile/>
            </Route>
            </BrowserRouter>
        </>
    )
}

export default App;