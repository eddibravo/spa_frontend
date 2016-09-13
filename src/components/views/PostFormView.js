import React from 'react'

class PostFormView extends React.Component {
    static propTypes = {
        adding_new_post: React.PropTypes.bool.isRequired,
        onPostSubmit: React.PropTypes.func.isRequired
    }

    handleSubmit(event){
        const { onPostSubmit  } = this.props
        event.preventDefault();

        if(!this._title.value.trim() || !this._body.value.trim() || !this._username.value.trim())
            return;
        onPostSubmit( { title: this._title.value.trim(), body: this._body.value.trim(), username: this._username.value.trim()} )
        this._title.value = '';  this._body.value = ''; this._username.value = '' // и всё же как "правильно" чистить форму - так и не понял (
    }

    render(){
        const { adding_new_post } = this.props
        return (
            <div>
                <fieldset>
                    <legend>Добавление новости</legend>

                    <form onSubmit={::this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="your name" ref={(node) => {this._username = node}}  />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="title" ref={(node) => {this._title = node}} />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="message body" ref={(node) => {this._body = node}} />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={adding_new_post}>Submit</button>
                        </div>
                    </form>
                </fieldset>
            </div>

        )
    }
}

export default PostFormView;