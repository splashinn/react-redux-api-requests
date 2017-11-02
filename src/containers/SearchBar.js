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
       this.setState({
           term: ''
       })
   }

    render() {
        return (
            <form onSubmit={this.submitTerm} className="input-group">
            <input style={{marginTop: 50}} className="form-control" onChange={this.inputChange} value={this.state.term} type="text" placeholder="Enter a city name" required="true" />
            <span className="input-group=btn">
                <button style={{marginTop: 50}}className="btn btn-primary btn-sm" type="submit">Search</button>
            </span>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchUser: fetchUser}, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)
