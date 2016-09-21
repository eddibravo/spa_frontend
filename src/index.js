import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import RSRouter from './components/containers/RSRouter'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <RSRouter history={history} />
    </Provider>, document.getElementById('root')
)