import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = (props) => {

    const {characters, id} = props;
    const classList = (id === 'list-page-0') ? 'container list-page active' : 'container list-page';

    return (
        <div className={classList} id={id}>
            {characters.map((item, idx) => {
                return (
                    <div className="card border character-cards" key={idx}>
                        <div className="card-header">
                            <Link to={`/${item.name}`} style={{ color: 'green' }}>
                                <h4>{item.name}</h4><i className="fas fa-link fa-lg"></i>
                            </Link>
                        </div>
                        <div className="card-body">
                            <span>Status : {item.status}</span>
                            <span>Occupation : {item.occupation.join(', ')}</span>
                            <span>Date of Birth : {item.birthday}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListPage;