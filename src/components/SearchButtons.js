import React, { Component } from 'react';

class SearchButtons extends Component {
  state = {
    inputSearch: ''
  }
  handleChange = (e) => {
    this.setState({inputSearch: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let city = "83";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
    let url = "https://developers.zomato.com/api/v2.1/cuisines?city_id=" + city;
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {

      const {results} = data.cuisines;
      this.props.onResults(results)
      
    })
  }
  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <div className="search-by-button">
          <input onChange={this.handleChange} type="text" className=""  size="120"placeholder="¿Qué andas buscando?" />
          <button className="btn">Buscar</button>
        </div>
      </form>
    )
  }
}

export default SearchButtons