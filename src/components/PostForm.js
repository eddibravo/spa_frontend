import React from 'react'

class PostForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            title: '',
            body: '',
            username: ''
        };
    }

    handleTitleChange(event){
        this.setState({title: event.target.value})
    }
    handleUsernameChange(event){
        this.setState({username: event.target.value})
    }
    handleBodyChange(event){
        this.setState({body: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        let data = { title: this.state.title.trim(), body: this.state.body.trim(), username: this.state.username.trim() };
        if(!data.title || !data.body || !data.username)
            return;

        this.props.onPostSubmit(data, this)
    }
    handleTestClick(){
        return this.props.onTestClick()
    }
    resetState(){
        this.setState({
            title: '', body: '', username:''
        })
    }

    render(){
        return (
            <div>
                <fieldset>
                    <legend>Добавление новости</legend>

                    <form onSubmit={::this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="your name" value={this.state.username} onChange={::this.handleUsernameChange}/>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="title" value={this.state.title} onChange={::this.handleTitleChange}/>
                        </div>

                        <div className="form-group">
                            <textarea value={this.state.body} placeholder="message body" onChange={::this.handleBodyChange}/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-info" onClick={::this.handleTestClick}>Test</button>
                        </div>
                    </form>
                </fieldset>
            </div>

        )
    }
}

export default PostForm;