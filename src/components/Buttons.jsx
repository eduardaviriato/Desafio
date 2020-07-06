import React, {Component} from 'react'

class LittleGrayButton extends Component{
    render(){ return(<div className="LittleGrayButton Transition"> {this.props.children} </div>) }
}

class BigBlueButton extends Component{
    render(){ return(<div className="BigBlueButton Transition"> {this.props.children} </div>) }
}

class TinyRedButton extends Component{
    render(){ return(<button className="TinyRedButton Transition" type={this.props.type} value={this.props.value}> {this.props.children} </button>) }
}

class MediumWhiteButton extends Component{
    render(){ return(<div className="MediumWhiteButton Transition">{this.props.children}</div>) }
}

export {BigBlueButton, TinyRedButton, MediumWhiteButton}
export default LittleGrayButton;