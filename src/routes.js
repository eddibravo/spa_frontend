import React from 'react';
import AppContainer from './components/containers/AppContainer';
import PostsContainer from './components/containers/PostsContainer'
import NotFoundView from './components/views/NotFoundView'
import SignInContainer from './components/containers/SignInContainer'
import PostContainer from './components/containers/PostContainer'
import { Route , IndexRoute} from 'react-router'

export const routes = (
    <div>
        <Route path='/' component={AppContainer} >
            <IndexRoute component={PostsContainer} />
            <Route path="/sign_in" component={SignInContainer}/>
            <Route path='/posts/:id' component={PostContainer}/>
        </Route>

        <Route path='*' component={NotFoundView} />
    </div>
)