import React from 'react';

class Results extends React.Component {

    render(){
        return(
            <div>
                Results for "{this.props.searchInput}"
                <ul>
                    {this.props.results ? <li>{this.props.results["Title"]} ({this.props.results["Year"]}) <button onClick={() => this.props.nominateMovie(this.props.results)}>Nominate</button></li> : null}
                </ul>
            </div>
        )
    }
}

export default Results;