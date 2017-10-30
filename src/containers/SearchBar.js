import React from 'react';

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
       document.querySelector('input').value = '';
       document.querySelector('input').focus();
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

export default SearchBar;
