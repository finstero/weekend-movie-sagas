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
        dispatch({
            type: 'ADD_MOVIE',
            payload: { 
                title: movieTitle,
                poster: moviePosterUrl,
                description: movieDescription,
                genre_id: genre
            }
        })
    }

    const handleCancel = () => {
        history.push('/');
    }
    const handleSelect = (event) => {
        setGenre(event.target.value);
        console.log('------ genre', genre)
    }

    return (
        <>
            <h3>Add a movie</h3>
            <form onSubmit={handleSave}>
                <Input

                    onChange={(event) => { setMovieTitle(event.target.value) }}
                    placeholder="title"
                    color="primary"
                />
                <Input

                    onChange={(event) => { setMoviePosterUrl(event.target.value) }}
                    placeholder="poster url"
                    color="primary"
                />
                <TextField

                    onChange={(event) => { setMovieDescription(event.target.value) }}
                    id="filled-basic"
                    label="Description"
                />
                <InputLabel id="genre-label">Genre</InputLabel>
                <Select
                    labelId="genre-label"
                    id="genre"
                    value={genre}
                    onChange={handleSelect}
                >

                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>

                </Select>
                <Button type="submit" color="primary">Save</Button>
            </form>
            <Button color="primary" onClick={handleCancel}>Cancel</Button>
        </>
    )
}

export default AddMovie;