import React, { Component } from 'react'
import { Link } from 'react-router'

class NotFound extends Component {
    render() {
        return (
            <div>
                Page not found. Back to <Link to='/'>main page</Link>
            </div>
        )
    }
}


export default NotFound