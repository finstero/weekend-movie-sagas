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

    const clickedMovie = useSelector(store => store.clickedMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        // dispatch({ type: 'CLEAR_DETAILS'})
    }, []);


    const handleMovieClick = (movie) => {
        // dispatch({ type: 'CLEAR_DETAILS'})

        console.log('clicked');
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie
        })
        console.log('please please clickedMovie', clickedMovie);
        history.push('/details')
    }

    return (
        <>
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={ () => handleMovieClick(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>
        </>
    );
}

export default MovieList;