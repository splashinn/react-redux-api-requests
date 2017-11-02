import React from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default class Chart extends React.Component {
    render() {
        return (
            <div>
                 <Sparklines height={100} width={100} data={this.props.data}>
                        <SparklinesLine color={this.props.color} />
                    </Sparklines>
            </div>
        )
    }
}