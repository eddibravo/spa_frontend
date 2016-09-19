import React from 'react'
import { Link } from 'react-router'
class PostsView extends React.Component {
    static propTypes={
        auth: React.PropTypes.object.isRequired,
        posts: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                body: React.PropTypes.string.isRequired,
                user: React.PropTypes.shape({
                    id: React.PropTypes.number.isRequired,
                    username: React.PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        ).isRequired,
        fetching_posts: React.PropTypes.bool.isRequired,
        reloadPosts: React.PropTypes.func.isRequired
    };


    handleDelete(item){
        const { removePost } = this.props

        if(confirm('delete post?')){
            removePost(item)
        }
    }
    renderItem(item, key){
        const { auth } = this.props
        return (
            <li className="post-item" key={key}>
                <h3>
                    <Link to={`/posts/${item.id}`}>{ item.title }</Link>
                    {
                        auth.isAuthenticated && auth.user.id === item.user.id?
                            (<button onClick={::this.handleDelete.bind(this, item)}>delete</button>)
                            : ''
                    }
                    <p style={{ marginTop:'-2px', fontSize: '80%', color:'gray', fontWeight: 'normal' }}>posted by: { item.user.username }</p>
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
                    {
                        posts.length > 0 ?
                            posts.map((item, key) => ::this.renderItem(item, key) )
                            : 'Тут будут отображаться новости'
                    }
                </ul>
                {
                    fetching_posts ?
                        'loading...'
                        : <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={reloadPosts}>reload posts</span>
                }

            </div>
        )
    }
}

export default PostsView;