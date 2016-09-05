import React from 'react'
import Post from './Post'

class PostList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }
    render(){
        return (
            <div className="post-items">
                { this.props.posts.map((post, key)=> <Post key={key} item={post.attributes} id={+(post.id)} />) }
            </div>
        )
    }
}

export default PostList;