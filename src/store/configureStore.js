import { createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import { authenticate } from '../middleware/authenticate'

const configureStore = (initialState) => {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger, authenticate, routerMiddleware(browserHistory))
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore