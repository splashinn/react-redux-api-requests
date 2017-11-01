import React from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class CityList extends React.Component {
    constructor() {
        super();

        this.renderData = this.renderData.bind(this);

    }

    renderData(data) {
        const temperature = data.list.map(weather =>  weather.main.temp)
        console.log(temperature)
        return (
            <tr key={data.city.name}>
                <td>{data.city.name}</td>
                <td>
                   <Sparklines height={100} width={100} data={temperature}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
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
