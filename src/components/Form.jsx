import React, {Component} from 'react'
import {Subtitle} from './Text'

class Form extends Component{
    render(){
        return(
            <div className="FormContainer">   
                <form className="Form" action={this.props.action} method={this.props.method} autoComplete={this.props.autoComplete}>
                    <div className="CenterContainer">
                        <Subtitle>{this.props.title}</Subtitle>
                    </div>
                    {this.props.children}
                    
                </form>
            </div>
        )
    }
}

class Input extends Component{
    render(){
        return(
            <div className="InputContainer">
                <label className="Label" for={this.props.name}>{this.props.title}</label>
                <input name={this.props.name} id={this.props.id} className="Input" type={this.props.type} />
            </div>
        )
    }
}

export {Input}
export default Form