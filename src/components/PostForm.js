import React from 'react'

class PostForm extends React.Component {
    static propTypes = {
        adding_new_post: React.PropTypes.bool.isRequired,
        onPostSubmit: React.PropTypes.func.isRequired
    }

    render(){
        let new_username, new_body, new_title
        const { adding_new_post, onPostSubmit, error } = this.props
        return (
            <div>
                <fieldset>
                    <legend>Добавление новости</legend>

                    <form onSubmit={event => {

                        event.preventDefault();

                        if(!new_title.value.trim() || !new_body.value.trim() || !new_username.value.trim())
                            return;
                        onPostSubmit( { title: new_title.value.trim(), body: new_body.value.trim(), username: new_username.value.trim()} )

                        new_title.value = ''
                        new_body.value = ''
                        new_username.value = ''

                    }}>
                        <div className="form-group">
                            <input type="text" placeholder="your name" ref={node => {new_username = node}}  />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="title" ref={node => {new_title = node}} />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="message body" ref={node => {new_body = node}} />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={adding_new_post}>Submit</button>
                            { error ? '' : error}
                        </div>
                    </form>
                </fieldset>
            </div>

        )
    }
}

export default PostForm;