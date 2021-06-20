import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // on click of add movie button, sends user to add page
    const handleAddClick = () => {
        history.push('/add');
    }

    // on click of movie, sends movie info through saga/reducer cycle. moves user to details page
    const handleMovieClick = (movie) => {

        console.log('clicked');
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie
        })
        history.push('/details')
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.primary.main,
            width: 200,
            height: 370,
        },
        title: {
            fontSize: 18,
        },
        // pos: {
        //     marginBottom: 12,
        // }
    }));

    const classes = useStyles();

    // displays movie title and movie poster image for every movie in database
    return (
        <>
            <main className="main">
                <Button onClick={handleAddClick} color="secondary">Add Movie</Button>
                <Grid container justify="center" spacing={1} className="movies">
                    {movies.map(movie => {
                        return (
                            // <div key={movie.id} >
                            //     <h3>{movie.title}</h3>
                            //     <img onClick={ () => handleMovieClick(movie)} src={movie.poster} alt={movie.title}/>
                            // </div>
                            <Grid item key={movie.id}>
                                <Card className={classes.root} variant="outlined">
                                    <CardActionArea onClick={() => handleMovieClick(movie)} >
                                        <CardMedia
                                            component="img"
                                            alt={movie.title}
                                            height="290"
                                            image={movie.poster}
                                            title={movie.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h4"
                                                className={classes.title}
                                                color="textSecondary">
                                                {movie.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    {/* <CardActions>
                                    <Button 
                                    onClick={() => handleMovieClick(movie)} 
                                    size="small" 
                                    color="primary">
                                        Details
                                    </Button>
                                </CardActions> */}
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </main>
        </>
    );
}

export default MovieList;