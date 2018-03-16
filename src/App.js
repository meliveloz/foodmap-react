import React, {Component} from 'react';
import Search from './components/Search';
import Restaurants from './components/Restaurants.js';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';
import './App.css';
import Alert from './components/Alert.js';
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
        <div className="login">
         <img className="img-responsive user-photo"src={this.state.user.photoURL} alt={this.state.user.displayName} />
         <p className="user-name">Bienvenid@ {this.state.user.displayName}</p>
         <button onClick={this.handleLogout} > Logout</button> 
         </div>
        );
    }else{
      return(
      <button onClick={this.handleAuth}>Login Google</button>
      );
    }
  }

  render() {

    return(
      <div className="container">
      { this.renderLoginButton() }
      <div>
        <button onClick={() => this.setState({ show: true })}>Condiciones de uso</button>
        <SweetAlert
          show={this.state.show}
          title="Condiciones de Uso"
          html
          text={renderToStaticMarkup(<Alert />)}
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
        <Search />
        <br></br>
          
            <div className="row">
              <Restaurants />
            </div>
          
      </div>
    );
  }
}


export default App;
