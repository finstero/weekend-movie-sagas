import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import Header from '../Header/Header';
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
                main: '#F3BB5C'
            },
            secondary: {
                main: '#CFBF84'
            },
            text: {
                primary: '#FFFFFF'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
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
