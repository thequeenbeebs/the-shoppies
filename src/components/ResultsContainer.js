import React from 'react';
import Result from './Result'

class ResultsContainer extends React.Component {

    render(){
        return(
            <div>
                <h2>Results for "{this.props.searchInput.split('+').join(' ')}"</h2>
                <ul>
                    {this.props.results["Search"] ? this.props.results["Search"].map(result => <Result nominateMovie={this.props.nominateMovie} results={result} nominations={this.props.nominations}/>) : null} 
                </ul>
            </div>
        )
    }
}

export default ResultsContainer;