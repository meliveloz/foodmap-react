import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './components/Search';
import SearchButtons from './components/SearchButtons';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <SearchButtons></SearchButtons>
      </div>
    );
  }
}

export default App;
