import React, {Component} from 'react';

class RestaurantsItems extends Component {
  checkImages(props) {
    let img = props.restaurants.featured_image;
    // si el key está vacío, elige una imagen random de unsplash
    if(img === '') {
      return "https://source.unsplash.com/200x200/?cuisine"
    } else {
      // si no, muestra la imagen de la api
      return img
    }
  }
  render() {
    //console.log(this.state);
    return (
      <div className="col-lg-3">
        <div className="card">  
          <div className="card-content">
            <span className="card-title">{this.props.restaurants.name}</span>
            <img src={this.checkImages(this.props)} alt="" />
            <p>Average Cost for 2
              = {this.props.restaurants.currency} {this.props.restaurants.average_cost_for_two}</p>
            <br/>
            <p>Average User rating = {this.props.restaurants.user_rating.aggregate_rating}</p>
            <p>Address: {this.props.restaurants.location.address}</p>
          </div>
          <div className="card-action">
            <a href={this.props.restaurants.url}>Look us up on Zomato!</a>
          </div>
        </div>
      </div>
    );
  }
}


export default RestaurantsItems;