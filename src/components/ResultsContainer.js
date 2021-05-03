import React from 'react';
import Result from './Result'

class ResultsContainer extends React.Component {

    render(){
        return(
            <div>
                Results for "{this.props.searchInput.split('+').join(' ')}"
                <ul>
                    <Result nominateMovie={this.props.nominateMovie} results={this.props.results}/>
                </ul>
            </div>
        )
    }
}

export default ResultsContainer;