import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './googlemap_react.jsx';
import flats from '../../data/flats.js'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="flat-list">
          <FlatList flats = {flats} />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
