import React from 'react';
import {connect} from 'react-redux';

class CityList extends React.Component {
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
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return { weather: state.weather}
}

export default connect(mapStateToProps)(CityList);
