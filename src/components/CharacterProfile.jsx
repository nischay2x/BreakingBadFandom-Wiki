import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacterProfile } from '../actions/characters';
import { Link } from 'react-router-dom';

const CharacterProfile = () => {

    const { who } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacterProfile(who))
    }, [dispatch, who])


    const data = useSelector(state => state.currentCharacter)
    const quotes = useSelector(state => state.quotesReducer)
    const charQuotes = quotes.filter(quote => quote.author === who);

    if(data.length){
        let info = data[0];
        return (
            <main>
                <div className="my-2" id='character'>
                    <div className="col-12 col-md-5 col-lg-3" id='char-img'>
                        <img src={info.img} alt={info.name} width='100%' />
                    </div>
                    <div className='col-md-6' id='char-profile'>
                        <div className="card-header">
                            <h4>{info.name}</h4>
                        </div>
                        <div className="card-body">
                            <p>Date of Birth : {info.birthday}</p>
                            <p>Occupation : {info.occupation.join(', ')}</p>
                            <p>Status : {info.status}</p>
                            <p>Nickname : {info.nickname}</p>
                            <p>Portyrayed By : {info.portrayed}</p>
                            <p>Appearance (Season) : {info.appearance.join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div className='container card' id='char-quote'>
                    {(charQuotes.length) ? <div className='card-header text-center'>
                        <h5>Quotes by {info.name}</h5>
                    </div> : <p></p>}
                    {
                        charQuotes
                            .map((quote, idx) => <div key={idx} className='card-body'>
                                <i className="fas fa-quote-left">
                                </i> <p className='quote-text'><i>{quote.quote}</i></p>
                            </div>)
                    }
                </div>
            </main>
        )
    }
    else {
        return (
            <main>
                <h1>Loading</h1>
            </main>
        )
    }
}

export default CharacterProfile;