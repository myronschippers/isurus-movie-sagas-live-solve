import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MoviesItem extends Component {
    clickToDetails = (event) => {
        this.props.history.push(`/detail/${this.props.item.id}`);
    }

    render() {
        return (
            <div onClick={this.clickToDetails}>
                <img src={this.props.item.poster} alt="movie poster" />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}

export default withRouter(MoviesItem);
