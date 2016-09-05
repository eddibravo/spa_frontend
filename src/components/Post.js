import React from 'react'

class Post extends React.Component {
    static propTypes={
        item: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            username: React.PropTypes.string.isRequired,
            body: React.PropTypes.string
        }),
        id: React.PropTypes.number
    };
    render(){
        return (
            <div className="post-item">
                <h3>
                    {this.props.item.title}
                    <p>{this.props.item.username}</p>
                </h3>
                <div className="post-content">{this.props.item.body}</div>
                <hr />
            </div>
        )
    }
}

export default Post;