import React, {Component} from 'react';
import './RestaurantsItems.css';

class RestaurantsItems extends Component {
  checkImages(props) {
    let img = props.restaurants.featured_image;
    // si el key está vacío, elige una imagen random de unsplash
    if(img === '') {
      return props.image;
    } else {
      // si no, muestra la imagen de la api
      return img
    }
  }
  render() {
    //console.log(this.state);
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 controlHeight clear-margin">
        <div className="card">               
          <div className="img-container" style={{backgroundImage: `url(${this.checkImages(this.props)})`}}></div>            
          {/*<img className="img-responsive" src={this.checkImages(this.props)} />*/}
          <div className="card-content">
            <h4 className="card-title">{this.props.restaurants.name}</h4>
            <p className="cuisines-types">{this.props.restaurants.cuisines}</p>
            <p><strong className="small-title">Promedio para dos: </strong>{this.props.restaurants.currency}{this.props.restaurants.average_cost_for_two}</p>
            {/*<p><strong className="small-title">Promedio rating: </strong>{this.props.restaurants.user_rating.aggregate_rating}</p>*/}
            <p><strong className="small-title">Dirección: </strong></p>
            <p className="address-style">{this.props.restaurants.location.address}</p>
          </div>
          <div className="card-read-more">
            <a href={this.props.restaurants.url} className="btn btn-link btn-block"> Ver en Zomato </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantsItems;

