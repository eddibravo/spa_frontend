import React from 'react'
import Post from './Post'

class PostList extends React.Component {
    static propTypes = {
        fetching_posts: React.PropTypes.bool.isRequired,
        props: React.PropTypes.array.isRequired
    }

    render(){
        const { fetching_posts, posts, reloadPosts, removePost } = this.props

        return (
            <div className="post-items">
                { posts.map((post, key)=> <Post key={key} item={post} removePost={removePost} />) }

                { fetching_posts ? 'loading...' : <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={reloadPosts}>reload posts</span> }
            </div>
        )
    }
}

export default PostList;