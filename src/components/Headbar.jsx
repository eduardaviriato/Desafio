import React, {Component} from 'react'

class Headbar extends Component{
    render(){ return(<div className="Headbar"> {this.props.children} </div>) }
}

class TranspHeadbar extends Component{
    render(){ return(<div className="TranspHeadbar"> {this.props.children} </div>) }
}

class HeadbarBrand extends Component{
    render(){ return(<div className="HeadbarBrand"> {this.props.children} </div>) }
}

class Brand extends Component{
    render(){ return(<div className="Brand"> Desafio Vtex </div>) }
}

class HeadbarList extends Component{
    render(){ return(<div className="HeadbarList"> {this.props.children} </div>) }
}

class HeadbarItem extends Component{
    render(){ return(<div className={"HeadbarItem " + this.props.color}> {this.props.children} </div>) }
}

class HeadbarAccount extends Component{
    render(){ return(<div className="HeadbarAccount"> {this.props.children} </div>) }
}

export {TranspHeadbar, HeadbarBrand, Brand, HeadbarList, HeadbarItem, HeadbarAccount}
export default Headbar