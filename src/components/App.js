import React from 'react'
import Post from './Post'
import PostForm from './PostForm'

let posts = [
    { id: 1, name: 'lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur dolorum, inventore modi odio officia omnis quaerat quas quod quos ratione reprehenderit sed similique tempore, veritatis vitae voluptas voluptate.' },
    { id: 2, name: 'Ipsum' , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at dignissimos magnam non numquam officia officiis sit vitae? Aliquid assumenda aut harum illo, quos temporibus. Consequatur ipsum mollitia necessitatibus.' },
    { id: 3, name: 'Test123', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dignissimos enim impedit ipsam mollitia soluta voluptatum. Debitis distinctio doloribus laboriosam, magni odit, quae quaerat quibusdam, reprehenderit unde vero voluptate?' }
];

class App extends React.Component {

    render() {
        return (
            <div>
                {posts.map(function (post) {
                    return <Post key={post.id} id={post.id} name={post.name} description={post.description}/>
                })}
                <PostForm/>
            </div>
        )
    }
}
export default App;