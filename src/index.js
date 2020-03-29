import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import NewsApp from './components/NewsApp';
import rootSaga from './sagas';
// import MoviesApp from './components/MoviesApp';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
  
  if (module.hot) {
      console.log('module hot',module.hot);
    module.hot.accept(NewsApp);
  }