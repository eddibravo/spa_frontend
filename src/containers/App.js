import React from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/PostActions'

class App extends React.Component {

    componentDidMount(){
        this.props.postActions.fetchPosts()
        // setInterval(() => {
        //     this.props.postActions.fetchPosts()
        // }, 1000)
    }
    render() {
        const { items, fetching_posts, adding_new_post, error } = this.props.posts
        const { addPost, fetchPosts, removePost} = this.props.postActions
        return (
            <div>
                <PostList posts={items} fetching_posts={fetching_posts} reloadPosts={fetchPosts} removePost={removePost}/>
                <PostForm onPostSubmit={addPost} adding_new_post={adding_new_post} error={error} key='new_post'/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);