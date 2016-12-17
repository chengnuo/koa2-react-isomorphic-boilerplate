/**
 * Created at 16/5/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
//redux-logger
import createLogger from 'redux-logger';
//redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

//redux-logger
const logger = createLogger();
//redux-devtools
const composeEnhancers = composeWithDevTools({ rootReducer });


const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger,
)(createStore)

// const createStoreWithMiddleware = applyMiddleware(
//   thunk,
//   logger,
// )(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState,composeEnhancers(
    applyMiddleware(invariant(), thunk)
  ))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
