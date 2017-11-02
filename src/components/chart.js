import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default class Chart extends React.Component {
    constructor() {
        super();

        this.average = this.average.bind(this);
    }

    average(data) {
        console.log('*****', data);
        let amount = _.round(_.sum(data) / data.length)
        return amount
    }
    render() {
        let data = this.props.data;
        let avg = _.round(_.sum(data) / data.length);

        console.log('data from chart component', this.props.data)
        return (
            <div>
                <Sparklines height={100} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>
                    {this.average(this.props.data)}
                </div>
            </div>
        )
    }
}