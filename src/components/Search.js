import React, { Component } from 'react';
import RestaurantsItems from './RestaurantsItems';

class Search extends Component {
  state = {
    inputSearch: '',
    searchedRestaurantArray: [], 
    coordinates: {},
  }
  handleChange = (e) => {
    this.setState({inputSearch: e.target.value});
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          coordinates: position.coords,
        }, function() {
        }) 
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(Restaurants.state)
    const inputSearch = this.state.inputSearch;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
    // Fetch según las coordenadas guardadas en el state
    let url = `https://developers.zomato.com/api/v2.1/search?q=${inputSearch}&lat=${this.state.coordinates.latitude}&lon=${this.state.coordinates.longitude}&sort=real_distance`
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
      this.setState({searchedRestaurantArray: data.restaurants}, function () {
        console.log(this.state.searchedRestaurantArray);
      })
    })
  }
  render() {
    // crea una variable vacía que se llena con un restaurantItem por cada restaurant
    let searchedRestaurants;
    // Si el estado de nearbyRestaurantArray existe, retorna un item por cada restaurante
    if( this.state.searchedRestaurantArray){
      searchedRestaurants = this.state.searchedRestaurantArray.map(listOfRestaurants => {
        return(
          // entrega a cada item la propiedad de su restaurante, para que lo renderice en su componente
          <RestaurantsItems  key={listOfRestaurants.restaurant.R.res_id} restaurants={listOfRestaurants.restaurant} />
        )
      })
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <form onSubmit = {this.handleSubmit}>
              <div className="input-append">
                <input onChange={this.handleChange} type="text" className="span2" placeholder="¿Qué andas buscando?" />
                <button className="btn">Buscar</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          {searchedRestaurants}
        </div>
      </div>
    )
  }
}

export default Search