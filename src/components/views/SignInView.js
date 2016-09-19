import React from 'react'


class SignInView extends React.Component{
    static propTypes = {
        onSubmit: React.PropTypes.func.isRequired,
        auth: React.PropTypes.shape({
            isFetching: React.PropTypes.bool.isRequired,
            errorMessage: React.PropTypes.string.isRequired
        }).isRequired
    }

    handleChangeInput(){
        this._submit_button.disabled = !(this._username.value.trim() && this._password.value.trim())
    }
    disableSubmitButton(){
        this._submit_button.disabled = true
    }

    componentDidMount(){
        this.disableSubmitButton()
    }

    handleSubmit(event){
        event.preventDefault()
        let user_data = {
            username: this._username.value.trim(),
            password: this._password.value.trim()
        }
        this.props.onSubmit(user_data)
        this._form.reset()
    }

    render(){
        const { errorMessage } = this.props.auth
        return(
            <div>
                <form ref={ (node) => this._form = node } onSubmit={::this.handleSubmit}>
                    <input type="text" ref={ (node) => this._username = node } placeholder="username" onChange={::this.handleChangeInput} />
                    <input type="password" ref={ (node) => this._password = node } placeholder="password" onChange={::this.handleChangeInput} />
                    <button type="submit" ref={ (node) => this._submit_button = node } >Sign in</button>
                    {
                        errorMessage ? (
                            <div className="alert alert-error">
                                { errorMessage }
                            </div>
                        ) : ''}
                </form>
            </div>
        )
    }
}

export default SignInView