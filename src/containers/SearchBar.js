import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';
class SearchBar extends React.Component {
   constructor() {
       super();

       this.state = {
           term: ''
       }

       this.inputChange = this.inputChange.bind(this);
       this.submitTerm = this.submitTerm.bind(this);
   }

   inputChange(event) {
       console.log(event.target.value);
       this.setState({
        term: event.target.value
       });
   }

   submitTerm(event) {
       event.preventDefault();
       console.log('-* state value *-', this.state.term)
       this.props.fetchUser(this.state.term)
   }

    render() {
        return (
            <form onSubmit={this.submitTerm} className="input-group">
            <input onChange={this.inputChange} value={this.state.term} className="form-control" type="text" placeholder="Enter a city name" required="true" />
            <span className="input-group=btn">
                <button className="btn-btn-secondary" type="submit">Submit</button>
            </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUser: fetchUser}, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)
