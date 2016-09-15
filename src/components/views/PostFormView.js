import React from 'react'

class PostFormView extends React.Component {
    static propTypes = {
        onPostSubmit: React.PropTypes.func.isRequired
    }

    handleSubmit(event){
        const { onPostSubmit  } = this.props
        event.preventDefault();

        onPostSubmit( { title: this._title.value.trim(), body: this._body.value.trim(), username: this._username.value.trim()} )
        this._form.reset()
        this._submit_button.disabled = true
    }
    handleChangeInput(){
        this._submit_button.disabled = !(this._title.value.trim() && this._body.value.trim() && this._username.value.trim())
    }

    componentDidMount(){
        this._submit_button.disabled = true
    }

    render(){
        return (
            <div>
                <fieldset>
                    <legend>Добавление новости</legend>

                    <form onSubmit={::this.handleSubmit} ref={(node) => {this._form = node}}>
                        <div className="form-group">
                            <input type="text" placeholder="your name" ref={(node) => {this._username = node}} onChange={::this.handleChangeInput} />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="title" ref={(node) => {this._title = node}}  onChange={::this.handleChangeInput} />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="message body" ref={(node) => {this._body = node}}  onChange={::this.handleChangeInput} />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" ref={(node) => this._submit_button = node}>Submit</button>
                        </div>
                    </form>
                </fieldset>
            </div>

        )
    }
}

export default PostFormView;