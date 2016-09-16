import React from 'react'
import { Link } from 'react-router'

class HeaderView extends React.Component{

    render(){
        return(
            <div>
                <strong>SPA logo</strong> | <Link to="/">Главная</Link>
                <hr />
            </div>
        )
    }
}

export default HeaderView