import React from 'react';
import Button from 'react-bootstrap/Button';

class Result extends React.Component {

    render() {
        return (
            <li>{this.props.results["Title"]} ({this.props.results["Year"]}) 
                <Button 
                    variant="secondary" size="sm"
                    onClick={() => this.props.nominateMovie(this.props.results)}
                    disabled={this.props.nominations.some(nom => nom["imdbID"] === this.props.results["imdbID"]) || this.props.nominations.length === 5 ? true : false}
                    >Nominate</Button>
            </li>
        )
    }
}

export default Result;