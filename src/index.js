import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);
    yield takeEvery('ADD_MOVIE', addMovie);
}

// saga workers

// adds new movie to database
function* addMovie (action) {
    // console.log('add movie action.payload', action.payload);
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES'});
    } catch {
        console.log('error in addMovie', action.payload);
    }
}

// grabs clicked on movie object
function* fetchMovieDetails (action) {
    // console.log('in fetchMovieDetails worker saga', action.payload.id);
    try{
        const clickedMovie = yield axios.get(`/api/movie/details/${action.payload.id}`);
        yield put({ type: 'SET_DETAILS', payload: clickedMovie.data});
        console.log('in fetchMovieDetails worker saga clickedMovie.data', clickedMovie.data);
    } catch {
        console.log('fetchAllMovies error, want id', action.payload.id);
    }
}

// get all movies from the database
function* fetchAllMovies() {

    try {
        const movies = yield axios.get(`/api/movie`);
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
// DID NOT END UP USING
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

 // stores data for clicked on movie
const clickedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            console.log('action.payload in clickedMovie', action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        clickedMovie
    }),

    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
