import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <div>React simple starter</div> */}
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
