import React from 'react'

class Post extends React.Component {
    static propTypes={
        item: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            username: React.PropTypes.string.isRequired,
            body: React.PropTypes.string.isRequired
        }),
        removePost: React.PropTypes.func.isRequired
    };


    handleDelete(){
        const { removePost, item } = this.props

        if(confirm('delete post?')){
            removePost(item)
        }
    }

    render(){
        const { item } = this.props
        return (
            <div className="post-item">
                <h3>
                    { item.title } [<small style={{ color: 'red', cursor: 'pointer', textDecoration: 'underline' }} onClick={::this.handleDelete}>del</small>]
                    <p>{ item.username }</p>
                </h3>
                <div className="post-content">{ item.body }</div>
                <hr />
            </div>
        )
    }
}

export default Post;