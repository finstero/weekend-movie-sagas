import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {

    const history = useHistory();

    const clickedMovie = useSelector(store => store.clickedMovie);
    console.log('clickedMovie', clickedMovie);

    // moves user back to MovieList on click of Return button
    const handleClick = () => {
        history.push('/');
    }


    return (
        <>
            <p>{clickedMovie[0]?.description}</p>
            <button onClick={handleClick}>Return</button>
        </>
    )
}

export default Details;