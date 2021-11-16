import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieDetail() {

    const {id} = useParams();
    
    const MovieDetail = ({ title, poster_path, overview }) => (
            <Fragment>
                <div className="movie-detail">{id}</div>
                <Link to={`/${title}`}><img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80'} alt={title} /></Link>
                <div className="movie-info">
                    <h3>{title}</h3>
                </div>
                <div className="movie-overview">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </Fragment>
    )
}

export default MovieDetail;