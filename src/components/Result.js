import React from 'react';

const Result = props => {
    return (
        <li>{props.results["Title"]} ({props.results["Year"]}) <button onClick={() => props.nominateMovie(props.results)}>Nominate</button></li>
    )   
}

export default Result;