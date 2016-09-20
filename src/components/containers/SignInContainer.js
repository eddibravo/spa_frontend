import React from 'react'
import SignInView from '../views/SignInView'
import { connect } from 'react-redux'
import * as authActions from '../../actions/AuthActions'
import { bindActionCreators } from 'redux'

class SignInContainer extends React.Component{

    render(){
        const { auth } = this.props
        const { signIn } = this.props.authActions

        return(
            <SignInView onSubmit={signIn} auth={auth}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)