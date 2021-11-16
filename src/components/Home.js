import React, { useEffect, useState }from 'react';

import Movie from "./Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a2bf23be5504674b5b169927a017abc&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7a2bf23be5504674b5b169927a017abc&query=";


function Home() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);
            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <header>
                <button
                    type="button"
                    class="button"
                    onClick={() => window.location.reload('true')} >
                    Inicio
                </button>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="movie-container">
                {movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}

export default Home;