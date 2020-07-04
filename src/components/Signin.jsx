import React, {Component} from 'react';
import { connect } from 'react-redux'
import { signin } from '../store/actions/authActionCreator'
import {TinyRedButton} from './Buttons'
import {Subtitle} from './Text'

class Signin extends Component{

	constructor(props) {
        super(props)
        this.state = { login: '', password: '' }

        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    setLogin(e) {
        this.setState({ login: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.props.signin(this.state.login, this.state.password, () => {
            
        })

        this.setState({ login: '', password: '' })
    }

    renderMessage() {
        if (this.props.authMsg) {
            let alertType = this.props.authMsg.includes('Err') ? 'alert-danger' : 'alert-info'
            return (
                <div className={`${alertType}`}>
                    {this.props.authMsg}
                </div>
            )
        }
    }

    render(){
        return (
			<div className="FormContainer">
				<form className="Form" onSubmit={this.onSubmit}>
					<div className="CenterContainer">
                        <Subtitle>Fazer login</Subtitle>
                    </div>
					<div className="InputContainer">
				        <label className="Label" for="login">Login</label>
				        <input name="login" id="login" className="Input" type="text" onChange={this.setLogin} value={this.state.login} />
				    </div>
				    <div className="InputContainer">
				        <label className="Label" for="passwd">Senha</label>
				        <input name="passwd" id="passwd" className="Input" type="password" onChange={this.setPassword} value={this.state.password} />
				    </div>

			        <div className="CenterContainer">
			            <TinyRedButton type="submit" value="entrar">Entrar</TinyRedButton>
			        </div>
			        <div className="CenterContainer form_footer">
			            <p className>Esqueceu a senha? <a href="#" className="a">Clique aqui!</a></p>
			        </div>
                    <div className="CenterContainer form_footer">
                        {this.renderMessage()}
			        </div>
                    
			    </form>
			</div>
        )
    }
    
}


function mapStateToProps(state) {
    return {
        authMsg: state.authReducer.authMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signin(login, password, callback) {
            const action = signin(login, password, callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Signin);
