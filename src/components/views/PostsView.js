import React from 'react'

class PostsView extends React.Component {
    static propTypes={
        posts: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                username: React.PropTypes.string.isRequired,
                body: React.PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        fetching_posts: React.PropTypes.bool.isRequired,
        reloadPosts: React.PropTypes.func.isRequired,
        removePost: React.PropTypes.func.isRequired
    };


    handleDelete(item){
        const { removePost } = this.props

        if(confirm('delete post?')){
            removePost(item)
        }
    }
    renderItem(item, key){
        return (
            <li className="post-item" key={key}>
                <h3>
                    { item.title } [<small style={{ color: 'red', cursor: 'pointer', textDecoration: 'underline' }} onClick={::this.handleDelete.bind(this, item)}>del</small>]
                    <p>{ item.username }</p>
                </h3>
                <div className="post-content">{ item.body }</div>
            </li>
        )
    }

    render(){
        const{ posts, fetching_posts, reloadPosts} = this.props
        return (
            <div>
                <ul className="post-items">
                    {posts.map((item, key) => ::this.renderItem(item, key) )}
                </ul>
                { fetching_posts ? 'loading...' : <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={reloadPosts}>reload posts</span> }
            </div>
        )
    }
}

export default PostsView;