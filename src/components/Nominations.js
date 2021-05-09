import React from 'react';
import Button from 'react-bootstrap/Button';

class Nominations extends React.Component {
    render(){
        return(
            <div className="container">
                <h2>Nominations</h2>
                <ul>
                    {this.props.nominations.map(movie => <li key={movie['imdbID']}>{movie["Title"]} ({movie["Year"]}) <Button variant="secondary" size="sm" onClick={() => this.props.removeMovie(movie)}>Remove</Button></li>)}
                </ul>
            </div>
        )
    }
}

export default Nominations;