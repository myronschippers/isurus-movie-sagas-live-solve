import React, { Component } from 'react';

class MoviesItem extends Component {
    render() {
        return (
            <div>
                <img src={this.props.item.poster} alt="movie poster" />
                <h4>{this.props.item.title}</h4>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}

export default MoviesItem;
