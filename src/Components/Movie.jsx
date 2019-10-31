import React from 'react';
import '../style/Movie.css';
import {Modal, Button} from 'react-bootstrap';

export const Movie = ({clickHandler, movieDetails}) => (
    <div onClick={clickHandler} className="movie-image">
        <img src= {`http://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt="poster" />
    </div>
)

export const MovieDetails = (props) => (
    <div>
        <Modal
        {...props} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.movie.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Overview</h4>
                <p>
                {props.movie.overview}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
)
