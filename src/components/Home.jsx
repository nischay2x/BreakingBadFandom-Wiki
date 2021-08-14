import React from 'react';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import ListPage from './ListPage';
import { useState } from 'react';

const Home = () => {

    const characters = useSelector(state => state.characterReducer)
    const broken = breaker(characters, 10)

    const [activePage, setActivePage] = useState(0)

    const handleActivePageToggle = (e) => {
        displayActivePage(activePage, e.target.dataset.toggle);
        setActivePage(e.target.dataset.toggle)
    }

    return( 
        <main>
            <SearchBar chars={characters}/>
            {broken.map((breaks, idx) => <ListPage key={idx} characters={breaks} id={`list-page-${idx}`}/>)}
            <div id='pagination'>
                {broken.map((item, idx) => 
                    <button key={idx} 
                    className='btn btn-outline-primary' 
                    onClick={(e) => handleActivePageToggle(e)} 
                    id={`pagin-btn-${idx}`}
                    data-toggle={idx}>
                        {idx+1}
                    </button>)}
            </div>
        </main>
    )
}

export default Home;

function breaker (array, brPoint){
    let start = 0;
    let broken = []
    if(array.length > brPoint){
        while(start < array.length){
            broken.push(array.slice(start, start+brPoint))
            start+=brPoint;
        }
        return broken;
    } else {
        return [array];
    }
}

function displayActivePage (prev, now) {
    document.getElementById(`list-page-${prev}`).classList.remove('active')
    document.getElementById(`pagin-btn-${prev}`).classList.replace('btn-primary', 'btn-outline-primary')
    document.getElementById(`list-page-${now}`).classList.add('active')
    document.getElementById(`pagin-btn-${now}`).classList.replace('btn-outline-primary', 'btn-primary')
}