import React, {Component} from 'react'
import './icons.css'

class RoundIcon extends Component{
    render(){
        return(
            <div className="RoundIconContainer"><div className={'RoundIcon Transition icon-notext icon-' + this.props.icon}/></div>
        )
    }
}

export default RoundIcon;