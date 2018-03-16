import React, {Component} from 'react';
import HeaderBanner from './components/HeaderBanner';
import Search from './components/Search';
import Restaurants from './components/Restaurants.js';
import Footer from './components/Footer'


import './App.css';

import firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state={
      user:null
    }
    this.handleAuth= this.handleAuth.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }
  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email}  ha iniciado sesión `))
    .catch(error => console.log(`Error ${error.code}: ${error.message} ` ));
  }
  handleLogout(){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email}  ha salido de la sesión `))
    .catch(error => console.log(`Error ${error.code}: ${error.message} ` ));
  }
  renderLoginButton(){
    if(this.state.user){
      return(
        <nav className="login navbar-fixed-top">
          <div className="container">
            <div className="pull-right user-container">
              <div className="user-name-container">
                <p className="welcome">Bienvenid@</p>
                <p className="user-name">{this.state.user.displayName}</p>
                <a className="logout-btn" onClick={this.handleLogout} > Logout</a>
              </div>
              <img className="img-responsive user-photo"src={this.state.user.photoURL} alt={this.state.user.displayName} />
            </div>
          </div>
        </nav>
      );
    }else{
      return(
        <nav className="login clearfix navbar-fixed-top">
          <div className="container">
            <div className="pull-right user-container">
              <button className="login-btn" onClick={this.handleAuth}>Login Google</button>
            </div>
          </div>
        </nav>
      );
    }
  }

  render() {
    return(
      <div>
        { this.renderLoginButton() }
        <HeaderBanner />
        <Search />
        <div className="container main-container">
          <div className="row">
            <Restaurants />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
