import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
    return (
        <div className="App">
            <h1>The Movies Saga!</h1>
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
    );
}


export default App;
