import React, {Component} from 'react';
import Search from './components/Search';
import Restaurants from './components/Restaurants.js';
import './App.css';

class App extends Component {



    render() {

            return(
                <div>
                <Search />
                <Restaurants />
                </div>
            );
        }
}


export default App;
