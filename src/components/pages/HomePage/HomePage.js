import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES'});
    }

    render() {
        return (
            <div>
                HOME PAGE
            </div>
        );
    }
}

export default connect(mapStoreToProps)(HomePage);
