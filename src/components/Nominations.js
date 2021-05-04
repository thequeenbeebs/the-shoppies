import React from 'react';

class Nominations extends React.Component {
    render(){
        return(
            <div className="container">
                <h2>Nominations</h2>
                <ul>
                    {this.props.nominations.map(movie => <li>{movie["Title"]} ({movie["Year"]}) <button onClick={() => this.props.removeMovie(movie)}>Remove</button></li>)}
                </ul>
            </div>
        )
    }
}

export default Nominations;