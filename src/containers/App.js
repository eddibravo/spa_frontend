import React from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as postActions from '../actions/PostActions'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { posts: [] }
        this.handlePostSubmit = this.handlePostSubmit.bind(this)
        this.fetchPosts= this.fetchPosts.bind(this)
    }

    fetchPosts(){
        fetch(process.env.BACKEND_SERVER.trimRight('/')+ '/api/posts')
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then((data)=> {
                this.setState({posts: data['data']})
            } ).catch(this.errorNotify)
    }
    errorNotify(error){
        alert(error)
    }
    parseJSON(response){
        return response.json()
    }
    checkStatus(response){
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    componentDidMount(){
        this.fetchPosts()
        setInterval(this.fetchPosts, 5000)
    }

    handlePostSubmit(new_post, post_form_component){
        return fetch(process.env.BACKEND_SERVER.trimRight('/') + '/api/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: new_post
            })
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then((data)=> {
                this.setState({ posts: this.state.posts.concat([data['data']]) })
                post_form_component.resetState()
            }).catch(this.errorNotify)
    }


    render() {
        const { addPost } = this.props.postActions
        return (
            <div>
                <PostList posts={this.state.posts}/>
                <PostForm onPostSubmit={this.handlePostSubmit} onTestClick={addPost}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);