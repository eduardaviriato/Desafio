import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ContentA from './components/ContentA'
import Headbar, {TranspHeadbar, HeadbarBrand, HeadbarList, HeadbarItem, HeadbarAccount, Brand} from './components/Headbar'
import { TinyRedButton } from './components/Buttons'

class App extends Component {
  constructor(props){
    super(props)
    this.unloggedItemList =
    <TranspHeadbar>
      <div className="diagonal-poly"></div>
      <HeadbarBrand><Link to="/" className="no-decoration"><Brand /></Link></HeadbarBrand>
      <HeadbarList>
        <Link to={'/'} className='no-decoration'><HeadbarItem color="white">Para você</HeadbarItem></Link>
        <HeadbarItem color="white">Para o seu negócio</HeadbarItem>
        <HeadbarItem color="dark">Suporte para negócio</HeadbarItem>
        <Link to={'/contentA'} className='no-decoration'><HeadbarItem color="dark">Atendimento</HeadbarItem></Link>
        <HeadbarAccount>
        <Link to={'/Signup'} className='no-decoration'><TinyRedButton>Cadastrar-se</TinyRedButton></Link>
        <Link to={'/Signin'} className='no-decoration'><TinyRedButton>Login</TinyRedButton></Link>
        </HeadbarAccount>
      </HeadbarList>
    </TranspHeadbar>
    this.loggedItemList =
    <Headbar>
      <HeadbarBrand><Link to="/" className="no-decoration"><Brand /></Link></HeadbarBrand>
      <HeadbarList>
        <Link to={'/'} className='no-decoration'><HeadbarItem color="white">Resumo</HeadbarItem></Link>
        <Link to={'/Signin'} className='no-decoration'><HeadbarItem color="white">Atividades</HeadbarItem></Link>
        <Link to={'/Signup'} className='no-decoration'><HeadbarItem color="white">Para você</HeadbarItem></Link>
        <Link to={'/contentA'} className='no-decoration'><HeadbarItem color="white">Ajuda</HeadbarItem></Link>
        <Link className="no-decoration"><HeadbarAccount>{this.props.user}</HeadbarAccount></Link>
      </HeadbarList>
    </Headbar>
  }

  renderHeadbar(){
    if (this.props.user !== null){
      return this.loggedItemList
    }else {
      return this.unloggedItemList
    } 
  }

  render() {
    return (
      <Router>
        <div className='container'>
          {this.renderHeadbar()}
          {this.props.user !== null ? <Redirect to="/" /> : null}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Signin' component={Signin} />
            <Route path='/Signup' component={Signup} />
            <Route path='/contentA' component={ContentA} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
      user: state.authReducer.user
  };
}

export default connect(
  mapStateToProps
)(App);