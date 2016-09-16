import React from 'react'
import PostsView from '../views/PostsView'
import PostFormView from '../views/PostFormView'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../../actions/PostActions'


class PostsContainer extends React.Component{
    componentDidMount(){
        this.props.postActions.fetchPosts()
    }

    render(){
        const {error, fetching_posts, items} = this.props.posts
        const { addPost, removePost, fetchPosts } = this.props.postActions

        return(
            <div>
                <PostsView removePost={removePost} posts={items} fetching_posts={fetching_posts} reloadPosts={fetchPosts} />
                <PostFormView onPostSubmit={addPost} error={error} key='new_post'/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)