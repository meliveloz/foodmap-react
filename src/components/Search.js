import React, { Component } from 'react';
import $ from 'jquery';
import Restaurants from './Restaurants'
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';


class Search extends Component {
  state = {
    inputSearch: ''
  }
  handleChange = (e) => {
    this.setState({inputSearch: e.target.value});
  }


handleSubmit=(e) => {

    e.preventDefault()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
    const {inputSearch} = this.state
    let url = `https://developers.zomato.com/api/v2.1/search?q=${inputSearch}&lat=-33.4331797&lon=-70.64590470000002`
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const {results} = data;
      console.log(results)
      this.props.onResults(results)
    })
  }
  
  
  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <div className="input-append">
          <input onChange={this.handleChange} type="text" className="span2"  size="120"placeholder="¿Qué andas buscando?" />
          <button className="btn">Buscar</button>
        </div>
      </form>

    )
  }

}

export default Search;