import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,

});

const store = configureStore(reducer, applyMiddleware(thunk, logger));

export default store;
