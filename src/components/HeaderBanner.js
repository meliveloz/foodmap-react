import React, {Component} from 'react';
import './HeaderBanner.css'

class HeaderBanner extends Component {
  render() {
    return(
      <div className="banner">
        <div>
          <h1 className="banner-title">Foodies?</h1>
          <p>Bienvenidos al paraíso de la búsqueda culinaria</p>
        </div>
      </div>
    )
  }
}

export default HeaderBanner