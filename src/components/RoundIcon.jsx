import React, {Component} from 'react'
import './icons.css'

class RoundIcon extends Component{
    render(){
        return(
            <div className="RoundIconContainer">
                <div className={'RoundIcon Transition icon-' + this.props.icon}></div>
            </div>
        );
    }
}

export default RoundIcon;