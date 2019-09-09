import React, { Component } from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditPage extends Component {
    state = {
        title: '',
        description: '',
    }

    componentDidMount() {
        this.setState({
            title: this.props.store.movie.title,
            description: this.props.store.movie.description,
        })
    }

    changeMovieInfo = (event, newMovieKey) => {
        this.setState({
            ...this.state,
            [newMovieKey]: event.target.value,
        })
    }

    clickCancel = (event) => {
        this.setState({
            title: '',
            description: '',
        });

        this.props.history.push(`/detail/${this.props.store.movie.movie_id}`);
    }

    clickSave = (event) => {
        this.props.dispatch({
            type: 'PUT_MOVIE',
            payload: {
                ...this.state,
                id: this.props.store.movie.movie_id,
            },
        });

        this.props.history.push(`/detail/${this.props.store.movie.movie_id}`);
    }

    render() {
        const {
            movie,
        } = this.props.store;

        return (
            <div>
                <h1>EDIT PAGE</h1>
                <input
                    onChange={(event) => this.changeMovieInfo(event, 'title')}
                    value={this.state.title}
                    placeholder="Title"
                />
                <textarea
                    onChange={(event) => this.changeMovieInfo(event, 'description')}
                    value={this.state.description}
                    placeholder="Description"
                >
                </textarea>
                <button onClick={this.clickCancel}>Cancel</button>
                <button onClick={this.clickSave}>Save</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(EditPage));
