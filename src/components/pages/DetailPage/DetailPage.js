import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class DetailPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIE',
            payload: this.props.match.params.id
        });
    }

    render() {
        const {
            movie
        } = this.props.store;
        let displayGenres = [];
        
        if (movie.allGenres != null) {
            displayGenres = movie.allGenres.map((genre, index) => {
                return <li key={index}>{genre.genreName}</li>
            })
        }
        
        return (
            <div>
                <h1>DETAIl PAGE</h1>
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt="movie poster" />
                <p>{movie.description}</p>
                <h3>Genres: </h3>
                <ul>
                    {displayGenres}
                </ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(DetailPage);
