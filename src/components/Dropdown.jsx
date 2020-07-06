import React, { Component } from 'react'
export default class Drop extends Component{
    render(){
        return(
            <div className="Dropdown">
                <button className="Dropbutton RoundIcon Transition icon-shop icon-notext"></button>
                <div className="DropdownContent Transition">
                    <a className="Transition" href="#">Fisica</a>
                    <a className="Transition" href="#">Digital</a>
                    <a className="Transition" href="#">Marketplace</a>
                </div>
            </div> 
        )
    }
}