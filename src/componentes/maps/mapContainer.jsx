import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import * as infoData from './data/infoLar';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  
    render() {
      return (
        <Map google={this.props.google}
            initialCenter={{
                lat: -25.10,
                lng: -54.13
            }}
            zoom={10}
            onClick={this.onMapClicked}>

      {infoData.features.map(park => (
        <Marker
        onClick={this.onMarkerClick}
          key={park.properties.ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          name={park.properties.NAME}
          icon={{
            url: require('./logo.png'),
            scaledSize: {width: 50, height: 50}
            
          }}
        />
      ))}   
  
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
          </Map>
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer);