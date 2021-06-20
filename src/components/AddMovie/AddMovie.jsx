import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


// material ui
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function AddMovie() {

    const history = useHistory();


    const [movieTitle, setMovieTitle] = useState('');
    const [moviePosterUrl, setMoviePosterUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('');

    const handleSave = () => {

    }

    const handleCancel = () => {
        history.push('/');
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
                    onChange={(event) => { setGenre(event.target.value) }}
                >

                    <MenuItem value={10}>Adventure</MenuItem>
                    <MenuItem value={20}>Animated</MenuItem>
                    <MenuItem value={30}>Biographical</MenuItem>
                    <MenuItem value={10}>Comedy</MenuItem>
                    <MenuItem value={20}>Disaster</MenuItem>
                    <MenuItem value={30}>Drama</MenuItem>
                    <MenuItem value={10}>Epic</MenuItem>
                    <MenuItem value={20}>Fantasy</MenuItem>
                    <MenuItem value={30}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={20}>Science Fiction</MenuItem>
                    <MenuItem value={30}>Space Opera</MenuItem>
                    <MenuItem value={30}>Superhero</MenuItem>

                </Select>
                <Button color="primary">add</Button>
            </form>
            <Button color="primary" onClick={handleCancel}>Cancel</Button>
        </>
    )
}

export default AddMovie;