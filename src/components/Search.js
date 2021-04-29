import React from 'react';

class Search extends React.Component {
    render(){
        return(
            <div>
                <h2>Movie title</h2>
                <input type="text" onChange={(event) => this.props.updateSearch(event.target.value)}></input>
            </div>
        )
    }
}

export default Search;