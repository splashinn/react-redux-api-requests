import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form className="input-group">
            <input type="text" placeholder="Enter a city name" required="true" />
            <span className="input-group=btn">
                <button className="btn-btn-secondary" type="submit">Submit</button>
            </span>
            </form>
        )
    }
}

export default SearchBar;
