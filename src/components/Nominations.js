import React from 'react';

class Nominations extends React.Component {
    render(){
        return(
            <div className="container">
                <h2>Nominations</h2>
                <ul>
                    {this.props.nominations.map(movie => <li key={movie['imdbID']}>{movie["Title"]} ({movie["Year"]}) <button className="btn btn-secondary btn-sm" onClick={() => this.props.removeMovie(movie)}>Remove</button></li>)}
                </ul>
            </div>
        )
    }
}

export default Nominations;