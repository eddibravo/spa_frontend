import React from 'react'
import Post from './Post'
import PostForm from './PostForm'

class App extends React.Component {
    render() {
        return (
            <div>
                <Post/>
                <PostForm/>
            </div>
        )
    }
}
export default App;