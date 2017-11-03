import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import Map from '../components/Map';

class CityList extends React.Component {
    constructor() {
        super();

        this.renderData = this.renderData.bind(this);

    }

    renderData(data) {
        const temperature = data.list.map(weather => weather.main.temp)
        const pressure = data.list.map(weather => weather.main.pressure)
        const humidities = data.list.map(weather => weather.main.humidity)
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        console.log(temperature)
        console.log("google maps data", data.city.coord.lat);
        return (
            <tr key={data.city.name}>
                <td><Map lon={lon} lat={lat}/></td>
                <td><Chart data={temperature} color="red" /></td>
                <td><Chart data={pressure} color="red" /></td>
                <td><Chart data={humidities} color="red" /></td>
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
    return { weather: state.weather }
}

export default connect(mapStateToProps)(CityList);
