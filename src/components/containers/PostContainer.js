import React from 'react'
import PostView from '../views/PostView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../../actions/PostActions'


class PostContainer extends React.Component{
    componentDidMount(){
        this.props.postActions.fetchPost(+(this.props.params.id))
    }

    render(){
        const { post } = this.props

        return(
            <PostView post={post}/>
        )
    }
}


function mapStateToProps(state) {
    return {
        post: state.post,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)