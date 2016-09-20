import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'

import AppContainer from './AppContainer';
import PostsContainer from './PostsContainer'
import NotFoundView from '../views/NotFoundView'
import SignInContainer from './SignInContainer'
import PostContainer from './PostContainer'
import { Route , IndexRoute} from 'react-router'

class RSRouter extends React.Component {

    constructor(props){
        super(props)

        this.routes = (
            <div>
                <Route path='/' component={AppContainer} >
                    <IndexRoute component={PostsContainer} />
                    <Route path="/sign_in" component={SignInContainer} onEnter={::this.onlyForNotSignedIn} />
                    <Route path='/posts/:id' component={PostContainer}/>
                </Route>
                <Route path='*' component={NotFoundView} />
            </div>
        )
    }
    onlyForSignedIn(nextState, replace){
        const { auth } = this.props
        if(!auth.isAuthenticated)
            replace('/')
    }

    onlyForNotSignedIn(nextState, replace){
        const { auth } = this.props
        if(auth.isAuthenticated)
            replace('/')
    }

    render() {
        const { history } = this.props
        return(
            <Router history={history} routes={this.routes} />
        )
    }
}
function mapStateToProps(state) {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(RSRouter);