import React, { Component } from 'react';


class Search extends Component {
  state = {
    inputSearch: '',
    searchedRestaurantArray: [],
  }
  handleChange = (e) => {
    this.setState({inputSearch: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(Restaurants.state)
    const inputSearch = this.state.inputSearch;
    let lat = '-33.418853299999995';
    let lon = '-70.6423247';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
    let url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=${inputSearch}&sort=real_distance`
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
      this.setState({searchedRestaurantArray: data.restaurants}, function () {
        console.log(this.state.searchedRestaurantArray);
      })
    })
  }
  render() {
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
      </div>
    )
  }
}

export default Search