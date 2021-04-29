import React from 'react';
import './App.css';
import Search from './components/Search'
import Results from './components/Results'
import Nominations from './components/Nominations'

class App extends React.Component {
  state = {
    searchInput: "",
    results: {}
  }

  updateSearch = input => {
    this.setState({searchInput: input.split(' ').join('+')})
    fetch(`http://www.omdbapi.com/?t=${this.state.searchInput}&apikey=e26e6632`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results}))
  }

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <Search updateSearch={this.updateSearch}/>
        <Results searchInput={this.state.searchInput}/>
        <Nominations />
      </div>
    );
  }
}

export default App;


