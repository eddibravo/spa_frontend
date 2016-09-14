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
            <PostView body={post.body} title={post.title} username={post.username}  created_at={post.created_at}/>
        )
    }
}


function mapStateToProps(state) {
    return {
        post: state.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)