import React, {useState, useEffect} from 'react';
import {Movie, MovieDetails} from '../Components/Movie';
import '../style/MovieList.css';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=702240cc94c55db109a27bd53c65e1ae')
        .then(result => result.json())
        .then(data => {
            setMovieList(data.results);
        })
    }, []);
    const onclickHandler = (result) => {
        setClickedMovie(result);
        setModalShow(true);
        fetch('http://localhost:3100', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result)
            })
    };
    return (
        <div>
            <div className="movie-list-title">What's popular</div>
            <div className="movie-list">
                {movieList.map(
                (result, index) => <Movie key={index} clickHandler={()=>onclickHandler(result)} movieDetails={result} />)}
            </div>
            <MovieDetails show={modalShow} onHide={() => setModalShow(false)} movie={clickedMovie}/>
         </div>
    )
}

export default MovieList;