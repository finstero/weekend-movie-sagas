import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css'

// material ui
import Button from '@material-ui/core/Button';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // const clickedMovie = useSelector(store => store.clickedMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleAddClick = () => {
        history.push('/add');
    }

    // sends clicked on movie through saga/reducer cycle. moves user to details page
    const handleMovieClick = (movie) => {

        console.log('clicked');
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie
        })
        history.push('/details')
    }

    return (
        <>
        <main>
            <Button onClick={handleAddClick}>Add Movie</Button>
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