import React, { Component } from 'react';
import $ from 'jquery';


class Search extends Component {
  state = {
    inputSearch: ''
  }
  handleChange = (e) => {
    this.setState({inputSearch: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const inputSearch = this.state.inputSearch;
    let lat = '-33.418853299999995';
    let lon = '-70.6423247';
    console.log(inputSearch)
    $.ajax({
      type: "GET", //it's a GET request API
      headers: {
        'X-Zomato-API-Key': '2bf0938598b00170a5617b2c9ffffba8' //only allowed non-standard header
      },
      url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=${inputSearch}&sort=real_distance`, //what do you want
      dataType: 'json', //wanted response data type - let jQuery handle the rest...
      /*data: {
         //could be directly in URL, but this is more pretty, clear and easier to edit
         cuisine_id: inputSearch,
         
      },*/
      processData: true, //data is an object => tells jQuery to construct URL params from it
      success: function(data) {
        console.log(data); //what to do with response data on success
      }
    });
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

export default Search