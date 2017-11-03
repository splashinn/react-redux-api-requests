import React from 'react';

class Map extends React.Component {
   componentDidMount() {
       new google.maps.map(this.refs.map, {
           zoom: 12,
           center: {
               lat: this.props.lat,
               lng: this.props.lon
           }
       });
   }
   
    render() {
        return (
            <div ref="map"> </div>
        )
    }
}

export default Map;