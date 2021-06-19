import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css'

//components
import Details from '../Details/Details';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const [movieClicked, setMovieClicked] = useState(false);
    const [movieDescription, setMovieDescription] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const handleMovieClick = (movie) => {
        console.log('clicked', movieClicked);
        setMovieClicked(true);
        console.log('clicked movie info', movie);
        setMovieDescription(movie.description);
    }

    return (
        <>
        {movieClicked ? (
            <div>{movieDescription}</div>
        ) : (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                            // <Details onClick={handleMovieClick} key={movie.id} movie={movie} />

                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={ () => handleMovieClick(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>
        )}
        </>
    );
}

export default MovieList;