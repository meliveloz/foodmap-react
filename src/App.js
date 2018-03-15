import React, {Component} from 'react';
import Search from './components/Search';
import Restaurants from './components/Restaurants.js';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';
import './App.css';
import Alert from './components/Alert.js';

class App extends Component {
constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }


  render() {

    return(
      <div className="container">
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
