import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', allMoviesSaga);
    yield takeEvery('GET_MOVIE', movieSaga);
    yield takeEvery('PUT_MOVIE', movieUpdateSaga);
}

// ALL SAGAS
function* allMoviesSaga(action) {
    try {
        const response = yield axios.get('/movies');
        yield put({
            type: 'SET_MOVIES',
            payload: response.data,
        });

    } catch(err) {
        console.log('GET movies error: ', err);
    }

}

// GET a single movie
function* movieSaga(action) {
    try {
        const response = yield axios.get(`/movies/single/${action.payload}`);
        const allGenres = response.data.map((movieItem) => {
            return {
                genre_id: movieItem.genre_id,
                genreName: movieItem.name,
            }
        });
        yield put({
            type: 'SET_MOVIE',
            payload: {
                ...response.data[0],
                allGenres,
            },
        });
    } catch(err) {
        console.log('GET movie error: ', err);
    }
}

function* movieUpdateSaga(action) {
    try {
        yield axios.put(`/movies/single/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_MOVIES' });
    } catch(err) {
        console.log('PUT movie error: ', err);
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
