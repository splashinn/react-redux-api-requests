import React, { Component } from 'react';
import Susan from './Susan';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      age: 23
    }
  }
  render() {
    return (
      <div>
      <div>React simple starter</div>
      <Susan age={this.state.age}/>
      </div>
    );
  }
}
