import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../static/styles/global-styles';
import { ThemeProvider } from '../static/styles/themed-components';
import theme from '../static/styles/theme';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer, { RootState } from '../modules';

function MangoTV({ Component, store }) {
  return (
    <>
      <Head>
        <title>MangoTV</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"
        />
        <meta name="keywords" content="MangoTV" />
        <meta name="description" content="아프리카TV를 견제합니다" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </Provider>
    </>
  );
}

// HOC
const configureStore = (initialState: RootState, options: any) => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !==
              'undefined'
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
            : f => f,
        );
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(MangoTV);
