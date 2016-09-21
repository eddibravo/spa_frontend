import React from 'react'

class Post extends React.Component {
    static propTypes = {
        post: React.PropTypes.shape({
            // id: React.PropTypes.number.isRequired,
            username: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            body: React.PropTypes.string.isRequired,
            created_at: React.PropTypes.string.isRequired
        }).isRequired

    }
    render(){
        const { fetching, username, title, body, created_at } = this.props.post
        const post = (<div>
            <h3>
                { title }
                <p>posted by { username } at <small>{ created_at }</small></p>
            </h3>
            <div className="post-content">{ body }</div>
        </div>)

        return (
            <div>
                { fetching ? 'loading...' : post }
            </div>
        )
    }
}

export default Post