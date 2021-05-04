import React from 'react';
import { Button } from '@material-ui/core';

class Nominations extends React.Component {
    render(){
        return(
            <div className="container">
                <h2>Nominations</h2>
                <ul>
                    {this.props.nominations.map(movie => <li>{movie["Title"]} ({movie["Year"]}) <Button variant="contained" size="small" onClick={() => this.props.removeMovie(movie)}>Remove</Button></li>)}
                </ul>
            </div>
        )
    }
}

export default Nominations;