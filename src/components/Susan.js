import React from 'react';

export default class Susan extends React.Component {
    render() {
        var age = this.props.age
        return (
            <div>
                Hello from susans component!
                {age}
            </div>
        )
    }
}