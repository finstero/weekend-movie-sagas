import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// components
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm';

// material ui
import '@fontsource/roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/Styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function App() {

    // material ui theme for whole app
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#020C1D'
            },
            secondary: {
                main: '#F5A191'
            },
            text: {
                primary: '#020C1D',
                secondary: '#FFFFFF'

            },
            divider: '#FFFFFF',
            accent1color: '#FFFFFF'
        }
    })


    // styling for material ui
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        info: {
            marginTop: 12,
        },
        title: {
            padding: theme.spacing(1),
            paddingLeft: 100,
            textAlign: 'center',
            fontSize: 12,
        },
        nav: {
            padding: theme.spacing(1),
            paddingRight: 5,
        }
    }));

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <div className={classes.root}>
                        <Grid container direction="row" justify="center">
                            <Grid item xs={6} className={classes.title}>
                                <h1 className="header">Movies</h1>
                            </Grid>
                            <Grid item xs={6} className={classes.nav}>
                                <nav>
                                    <Link to="/add"><Button color="secondary">Add Movie</Button></Link>
                                </nav>
                            </Grid>
                        </Grid>
                    </div>
                    <Route path="/" exact>
                        <MovieList />
                    </Route>
                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route path="/add">
                        <MovieForm />
                    </Route>
                </div>
            </Router>
        </ThemeProvider>
    );
}


export default App;
