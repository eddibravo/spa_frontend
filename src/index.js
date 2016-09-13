import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/containers/AppContainer';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()
render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);