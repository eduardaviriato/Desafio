import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../store/actions/authActionCreator'
import {TinyRedButton} from './Buttons'
import {Subtitle} from './Text'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            passwordConf: '',
            loading: false }
        
        this.setName = this.setName.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPhone = this.setPhone.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setPasswordConf = this.setPasswordConf.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this._isMounted = false
    }

    componentDidMount(){
        this._isMounted = true
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setPhone(e) {
        this.setState({ phone: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }
    
    setPasswordConf(e) {
        this.setState({ passwordConf: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({ loading: true })

        this.props.signup(this.state.email, this.state.password, (user) => {
            this._isMounted && this.setState({ loading: false })
        })
        this.setState({ email: '', password: '' })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <div className="CenterContainer">
                <button className="TinyRedButton" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status"
                        aria-hidden="true">

                    </span>
                            Carregando...
                </button>
                </div>
            )
        }
        return  <div className="CenterContainer">
            <TinyRedButton type="submit" value="Cadastrar">Cadastrar</TinyRedButton>
            </div>

    }

    renderMessage() {
        if (this.props.authMsg) {
            let alertType = this.props.authMsg.includes('Err') ? 'alert-danger' : 'alert-info'
            return (
                <div className={`alert ${alertType}`} role='alert'>
                    {this.props.authMsg}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="FormContainer">
                <form onSubmit={this.onSubmit} className="Form">
                    <div className="CenterContainer">
                        <Subtitle>Cadastre-se</Subtitle>
                    </div>
                    <div className="InputContainer">
                        <label className="Label">Nome</label>
                        <input type="text" className="Input"
                            value={this.state.name} onChange={this.setName} />
                    </div>
                    <div className="InputContainer">
                        <label className="Label">E-mail</label>
                        <input type="email" className="Input"
                            value={this.state.email} onChange={this.setEmail} />
                    </div>
                    <div className="InputContainer">
                        <label className="Label">Telefone</label>
                        <input type="number" className="Input"
                            value={this.state.phone} onChange={this.setPhone}/>
                    </div>
                    <div className="InputContainer">
                        <label className="Label">Senha</label>
                        <input type="password" className="Input"
                            value={this.state.password} onChange={this.setPassword} />
                    </div>
                    <div className="InputContainer">
                        <label className="Label">Confirme sua senha</label>
                        <input type="password" className="Input"
                            value={this.state.passwordConf} onChange={this.setPasswordConf} />
                    </div>
                    <div className="InputContainer">
                        {this.renderButton()}
                    </div>
                </form>
                <div className="CenterContainer form_footer">
                    {this.renderMessage()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authMsg: state.authReducer.authMsg
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signup(email, password, callback) {
            const action = signup(email, password, callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Signup);

