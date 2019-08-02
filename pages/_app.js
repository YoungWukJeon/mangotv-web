import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const mangoTV = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>mangoTV</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <meta name="keywords" content="mangoTV" />
        <meta name="description" content="아프리카TV를 견제합니다" />
        <link href="/static/css/normalize.css" rel="stylesheet" />
      </Head>
      <Component />
    </Provider>
  )
}

mangoTV.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object
}

// HOC
const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(mangoTV);