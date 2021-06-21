import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Details.css';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Details() {

    const history = useHistory();
    const dispatch = useDispatch();

    // reducer storing clicked on movie info
    const clickedMovie = useSelector(store => store.clickedMovie);
    console.log('clickedMovie', clickedMovie);

    // this useEffect did not work but was my attempt at the first stretch goal
    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_MOVIE_DETAILS',
    //         payload: clickedMovie
    //     })
    // }, []);

    // moves user back to MovieList on click of Return button
    const handleClick = () => {
        history.push('/');
    }

    // styling for material ui
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        info: {
            marginTop: 12,
        },
        title: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.primary.main,
            backgroundColor: '#F5A191',
            fontSize: 24,
        },
        description: {
            backgroundColor: theme.palette.primary.main,
            marginTop: 8,
            color: theme.palette.text.secondary,
        },
        genre: {
            backgroundColor: theme.palette.primary.main,
            marginTop: 8,
        }
    }));

    const classes = useStyles();

    // displays details of clicked on movie in a grid
    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Paper elevation={1} variant="outlined" className={classes.title}>{clickedMovie[0]?.title}</Paper>
                    {/* <h3>{clickedMovie[0]?.title}</h3> */}
                </Grid>
                <Grid item xs={3} className={classes.info}>
                    <img src={clickedMovie[0]?.poster} alt={clickedMovie[0]?.title} />
                </Grid>
                <Grid item xs={6} className={classes.description} variant="outlined">
                    <Paper elevation={1} variant="outlined" className={classes.description}>{clickedMovie[0]?.description}</Paper>
                    {/* <p>{clickedMovie[0]?.description}</p> */}
                </Grid>
                <Grid item xs={3} variant="outlined" className={classes.genre}>
                    <ul type="none">Genres:
                        {clickedMovie.map((info, i) => {
                            return (
                                <li key={i}>{info.name}</li>
                            )
                        })}
                    </ul>
                </Grid>
                <Grid item>
                    <Button color="secondary" onClick={handleClick} variant="outlined">Return</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Details;