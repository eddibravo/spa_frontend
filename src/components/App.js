import React from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
// let posts = [
//     { id: 1, name: 'lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur dolorum, inventore modi odio officia omnis quaerat quas quod quos ratione reprehenderit sed similique tempore, veritatis vitae voluptas voluptate.' },
//     { id: 2, name: 'Ipsum' , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at dignissimos magnam non numquam officia officiis sit vitae? Aliquid assumenda aut harum illo, quos temporibus. Consequatur ipsum mollitia necessitatibus.' },
//     { id: 3, name: 'Test123', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dignissimos enim impedit ipsam mollitia soluta voluptatum. Debitis distinctio doloribus laboriosam, magni odit, quae quaerat quibusdam, reprehenderit unde vero voluptate?' }
// ];

const backend = 'http://localhost:3000';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { posts: [] }
        this.handlePostSubmit = this.handlePostSubmit.bind(this)
        this.fetchPosts= this.fetchPosts.bind(this)
    }

    fetchPosts(){
        fetch(backend + '/api/posts')
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
        return fetch(backend + '/api/posts', {
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
        return (
            <div>
                <PostList posts={this.state.posts}/>
                <PostForm onPostSubmit={this.handlePostSubmit}/>
            </div>
        )
    }
}
export default App;