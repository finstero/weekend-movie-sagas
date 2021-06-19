import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {

    const clickedMovie = useSelector(store => store.clickedMovie);



    return (
        <>
            <p>{clickedMovie.description}</p>
        </>
    )
}

export default Details;