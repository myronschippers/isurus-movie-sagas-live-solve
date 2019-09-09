import React, { Component } from 'react';
import MoviesItem from '../MovieItem/MovieItem';

class MoviesList extends Component {
    render() {
        const displayMovies = this.props.movies.map((movie, index) => {
            return <MoviesItem item={movie} key={index} />
        })
        return (
            <div>
                {displayMovies}
            </div>
        );
    }
}

export default MoviesList;
