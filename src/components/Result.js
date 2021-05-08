import React from 'react';

class Result extends React.Component {

    render() {
        return (
            <li>{this.props.results["Title"]} ({this.props.results["Year"]}) 
                <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.props.nominateMovie(this.props.results)}
                    disabled={this.props.nominations.some(nom => nom["imdbID"] === this.props.results["imdbID"]) ? true : false}
                    >Nominate</button>
            </li>
        )
    }
}

export default Result;