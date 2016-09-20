import React from 'react'
import HeaderView from '../views/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/AuthActions'

class AppContainer extends React.Component {

    render() {
        const { auth } = this.props
        const { logoutAndRedirect } = this.props.authActions
        return (
            <div>
                <HeaderView auth={auth} signOut={logoutAndRedirect}/>
                <main style={{padding: '15px'}}>
                    { this.props.children }
                </main>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        auth: state.auth
    }
}


function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);