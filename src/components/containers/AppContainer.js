import React from 'react'
import PostsView from '../views/PostsView'
import PostFormView from '../views/PostFormView' // Название класса/имя файла не меняю, т.к. начнем если строгать контейнеры, то я буду путаться где компоненты-представления а где компоненты-контейнеры
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../../actions/PostActions'

class AppContainer extends React.Component {

    componentDidMount(){
        this.props.postActions.fetchPosts()
        // setInterval(() => {
        //     this.props.postActions.fetchPosts()
        // }, 1000)
    }
    render() {
        const {adding_new_post, error, fetching_posts, items} = this.props.posts
        const { addPost, removePost, fetchPosts } = this.props.postActions
        return (
            <div>
                <PostsView removePost={removePost} posts={items} fetching_posts={fetching_posts} reloadPosts={fetchPosts} />
                <PostFormView onPostSubmit={addPost} adding_new_post={adding_new_post} error={error} key='new_post'/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);