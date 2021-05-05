import React from 'react';
import { Button } from '@material-ui/core';

class Result extends React.Component {

    render() {
        return (
            <li>{this.props.results["Title"]} ({this.props.results["Year"]}) 
                <Button 
                    variant="contained"
                    size="small"
                    onClick={() => this.props.nominateMovie(this.props.results)}
                    disabled={this.props.nominations.some(nom => nom["imdbID"] === this.props.results["imdbID"]) ? true : false}
                    >Nominate</Button>
            </li>
        )
    }
}

export default Result;