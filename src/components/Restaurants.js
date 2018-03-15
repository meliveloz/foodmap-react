import React, { Component } from 'react';
import RestaurantsItems from './RestaurantsItems';




class Restaurants extends Component {

    constructor(props){
        super(props);
        this.state = {
                      
            nearbyRestaurantArray:[]
        }


    }

    componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', '57800fe3a17bc04ca2e40cfb5cf036fc');
    let options = {
      method: 'GET',
      headers: headers
    };
    let url = "https://developers.zomato.com/api/v2.1/search?lat=-33.3945146&lon=-70.6395131"
    window.fetch(url, options)
    .then(response => response.json())
    .then(data => {
       this.setState({nearbyRestaurantArray: data.restaurants}, function () {
                    console.log(this.state);
                })
    })
  }
 
  render() {
    let nearRestaurants;
    if( this.state.nearbyRestaurantArray){
        nearRestaurants = this.state.nearbyRestaurantArray.map(listOfRestaurants => {
      return(
        <RestaurantsItems  key={listOfRestaurants.restaurant.R.res_id} restaurants={listOfRestaurants.restaurant} />
        )
  })

  }

        return (

            <div >
                <div className="row">
                    {nearRestaurants}
                </div>

            </div>
        );
    }
}
 
    





export default Restaurants;

