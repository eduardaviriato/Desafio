import React, {Component} from 'react'

class Text extends Component{
    render(){ return(<div className="Text"> {this.props.children} </div>) }
}

class Title extends Component{
    render(){ return(<h1 className="Title"> {this.props.children} </h1>) }
}

class Subtitle extends Component{
    render(){ return(<h1 className="Subtitle"> {this.props.children} </h1>) }
}

export {Title, Subtitle}
export default Text;