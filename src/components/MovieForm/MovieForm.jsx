import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


// material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';



function AddMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    // local states
    const [movieTitle, setMovieTitle] = useState('');
    const [moviePosterUrl, setMoviePosterUrl] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [genre, setGenre] = useState('');

    // save movie info into object and send to saga/router/db
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
        history.push('/');
    }

    // move user back to MovieList view
    const handleCancel = () => {
        history.push('/');
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
                background: "#F5A191",
                textColor: "white",
            },
        },
    }));

    const classes = useStyles();

    // displays inputs, select, and buttons for user to save movie or go back
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <h3>Add a movie</h3>
                </Grid>
                <Grid container justify="center">
                    <form onSubmit={handleSave} className={classes.root}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                onChange={(event) => { setMovieTitle(event.target.value) }}
                                label="title"
                                id="outlined-required"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                onChange={(event) => { setMoviePosterUrl(event.target.value) }}
                                label="poster url"
                                id="outlined-required"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                onChange={(event) => { setMovieDescription(event.target.value) }}
                                id="outlined-required"
                                label="Description"
                                variant="outlined"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item>
                            <FormControl required className={classes.root}>
                                <InputLabel id="genre-label">Genre</InputLabel>
                                <Select
                                    labelId="genre-label"
                                    id="genre"
                                    value={genre}
                                    color="secondary"
                                    onChange={(event) => { setGenre(event.target.value) }}
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
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" color="secondary">Save</Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" onClick={handleCancel}>Cancel</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddMovie;