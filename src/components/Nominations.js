import React from 'react';

class Nominations extends React.Component {
    render(){
        return(
            <div>
                Nominations
                <ul>
                    {this.props.nominations.map(movie => <li>{movie["Title"]} ({movie["Year"]}) <button>Remove</button></li>)}
                </ul>
            </div>
        )
    }
}

export default Nominations;