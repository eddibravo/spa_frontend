import React from 'react'
import { Link } from 'react-router'

class HeaderView extends React.Component{
    static propTypes = {
        signOut: React.PropTypes.func.isRequired,
        auth: React.PropTypes.object.isRequired
    }
    render(){
        const { auth, signOut } = this.props
        const { user } = auth
        return(
            <div>
                <strong>SPA logo</strong> | <Link to="/">Главная</Link> |&nbsp;
                {
                    auth.isAuthenticated ?
                        <div style={{ display: 'inline-block' }}>
                            welcome <strong>{ user.username }</strong> <button type="button" onClick={signOut}>Выйти</button>
                        </div>
                        :
                        <Link to="/sign_in">Войти</Link> }

                <hr />
            </div>
        )
    }
}

export default HeaderView