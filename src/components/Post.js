import React from 'react'

class Post extends React.Component {
    render(){
        return (
            <div className="post-item" key={this.props.id}>
                <div className="post-title">{this.props.name}</div>
                <div className="post-content">{this.props.description}</div>
                <hr />
            </div>
        )
    }
}

Post.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
};

export default Post;