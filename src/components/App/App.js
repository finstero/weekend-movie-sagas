import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

// material ui
import '@fontsource/roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/Styles';


function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffa4a2'
            },
            secondary: {
                main: '#af4448'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <h1>Movies</h1>
                <Router>
                    <Route path="/" exact>
                        <MovieList />
                    </Route>
                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route path="/add">
                        <AddMovie />
                    </Route>
                </Router>
            </div>
        </ThemeProvider>
    );
}


export default App;
