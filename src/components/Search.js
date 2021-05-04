import React from 'react';

class Search extends React.Component {
    render(){
        return(
            <div className="search">
                <h2>Search by movie title:</h2>
                <input type="text" onChange={(event) => this.props.updateSearch(event.target.value)}></input>
            </div>
        )
    }
}

export default Search;