import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


// material ui
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function AddMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [movieTitle, setMovieTitle] = useState('');
    const [moviePosterUrl, setMoviePosterUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('');

    const handleSave = (event) => {
        event.preventDefault();
        console.log('log genre', genre);
    }

    const handleCancel = () => {
        history.push('/');
    }
    const handleSelect = (event) => {
        setGenre(event.target.value);
        console.log('------ genre', genre)
        dispatch({
            type: 'ADD_MOVIE',
            payload: { 
                title: movieTitle,
                poster: moviePosterUrl,
                description: movieDescription,
                genre_id: 1
            }
        })
    }

    return (
        <>
            <h3>Add a movie</h3>
            <form onSubmit={handleSave}>
                <Input

                    onChange={(event) => { setMovieTitle(event.target.value) }}
                    placeholder="movie name"
                    color="primary"
                />
                <Input

                    onChange={(event) => { setMoviePosterUrl(event.target.value) }}
                    placeholder="movie poster url"
                    color="primary"
                />
                <TextField

                    onChange={(event) => { setMovieDescription(event.target.value) }}
                    id="filled-basic"
                    label="MOVIE DESCRIPTION"
                />
                <InputLabel id="genre-label">Movie Genre</InputLabel>
                <Select
                    labelId="genre-label"
                    id="genre"
                    value={genre}
                    onChange={handleSelect}
                >

                    <MenuItem value="Adventure">Adventure</MenuItem>
                    <MenuItem value="Animated">Animated</MenuItem>
                    <MenuItem value="Biographical">Biographical</MenuItem>
                    <MenuItem value="Comedy">Comedy</MenuItem>
                    <MenuItem value="Disaster">Disaster</MenuItem>
                    <MenuItem value="Drama">Drama</MenuItem>
                    <MenuItem value="Epic">Epic</MenuItem>
                    <MenuItem value="Fantasy">Fantasy</MenuItem>
                    <MenuItem value="Musical">Musical</MenuItem>
                    <MenuItem value="Romantic">Romantic</MenuItem>
                    <MenuItem value="Science">Science Fiction</MenuItem>
                    <MenuItem value="Space Opera">Space Opera</MenuItem>
                    <MenuItem value="Superhero">Superhero</MenuItem>

                </Select>
                <Button type="submit" color="primary">Save</Button>
            </form>
            <Button color="primary" onClick={handleCancel}>Cancel</Button>
        </>
    )
}

export default AddMovie;