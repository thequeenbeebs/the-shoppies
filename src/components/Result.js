import React from 'react';

class Result extends React.Component {

    render() {
        return (
            <li>{this.props.results["Title"]} ({this.props.results["Year"]}) 
                <button 
                    onClick={() => this.props.nominateMovie(this.props.results)}
                    disabled={this.props.nominations.some(nom => nom["imdbID"] === this.props.results["imdbID"]) ? "true" : ""}
                    >Nominate</button>
            </li>
        )
    }
}

export default Result;