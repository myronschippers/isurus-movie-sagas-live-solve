import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import MoviesList from '../../MoviesList/MoviesList';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES'});
    }

    render() {
        console.log('movies: ', this.props.store.movies);
        return (
            <div>
                HOME PAGE
                <MoviesList movies={this.props.store.movies} />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(HomePage);
