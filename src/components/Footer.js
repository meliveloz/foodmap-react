import React, {Component} from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';
import Alert from './Alert.js';
import './Footer.css'

class Footer extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-xs-12 clear-margin">
            <p className="footer-text">Hecho con <span className="heart">❤</span> por Foodies</p>
            <div>
              <a onClick={() => this.setState({ show: true })}>Condiciones de uso</a>
              <SweetAlert
                show={this.state.show}
                title="Condiciones de Uso"
                html
                text={renderToStaticMarkup(<Alert />)}
                onConfirm={() => this.setState({ show: false })}
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer