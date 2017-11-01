import React from 'react';
import {connect} from 'react-redux';

class CityList extends React.Component {
   constructor() {
       super();

       this.renderData = this.renderData.bind(this);
   }

   renderData(data) {
       return (
           <tr key={data.city.name}>
            <td>{data.city.name}</td>
            </tr>
       )
   }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Weather</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderData)}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return { weather: state.weather}
}

export default connect(mapStateToProps)(CityList);
