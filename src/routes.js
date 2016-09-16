import React from 'react';
import AppContainer from './components/containers/AppContainer';
import PostsContainer from './components/containers/PostsContainer'
import NotFoundView from './components/views/NotFoundView'
import PostContainer from './components/containers/PostContainer'
import { Route , IndexRoute} from 'react-router'

export const routes = (
    <div>
        <Route path='/' component={AppContainer} >
            <IndexRoute component={PostsContainer} />
            <Route path='/posts/:id' component={PostContainer}/>
        </Route>

        <Route path='*' component={NotFoundView} />
    </div>
)