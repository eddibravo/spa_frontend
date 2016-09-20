import React from 'react'
import Posts from '../views/posts'
import PostForm from '../views/posts/form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../../actions/PostActions'


class PostsContainer extends React.Component{
    componentDidMount(){
        this.props.postActions.fetchPosts()
    }

    render(){
        const { posts, auth } = this.props
        const { error, fetching_posts, items } = posts
        const { addPost, removePost, fetchPosts } = this.props.postActions

        return(
            <div>
                <Posts removePost={removePost} auth={auth} posts={items} fetching_posts={fetching_posts} reloadPosts={fetchPosts} />
                { auth.isAuthenticated ? <PostForm onPostSubmit={addPost} error={error} key='new_post'/> : ''}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts,
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)