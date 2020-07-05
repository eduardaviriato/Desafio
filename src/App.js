import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';



import Main from './components/Main'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ContentA from './components/ContentA'
import ContentB from './components/ContentB'
import Create from './components/Create'
import Edit from './components/Edit'
import List from './components/List'

class App extends Component {

  render() {
    return (
      
      <Router>
        <header className="App-header">
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
            <Link to={'/'} className='navbar-brand'>Desafio Vtex</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link '>Home</Link>
                </li>
                <li>
                  <Link to={'/signin'} className='nav-link'>Login</Link>
                </li>
                <li>
                  <Link to={'/signup'} className='nav-link'>Cadastro</Link>
                </li>
                <li>
                  <Link to={'/contentA'} className='nav-link'>Conteúdo A</Link>
                </li>
                <li>
                  <Link to={'/contentB'} className='nav-link'>Conteúdo B</Link>
                </li>
                <li>
                  <Link to={'/create'} className='nav-link'>Create</Link>  
                </li>
                <li>
                  <Link to={'/list'} className='nav-link'>List</Link>  
                </li>
              </ul>
            </div>
            {this.props.user}
          </nav>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/contentA' component={ContentA} />
            <Route path='/contentB' component={ContentB} />
            <Route path='/create' component={Create}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
        </header>
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