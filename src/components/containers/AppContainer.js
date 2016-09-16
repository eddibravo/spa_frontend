import React from 'react'
import HeaderView from '../views/HeaderView'
import { connect } from 'react-redux'

class AppContainer extends React.Component {

    render() {
        return (
            <div>
                <HeaderView/>
                <main style={{padding: '15px'}}>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default connect()(AppContainer);