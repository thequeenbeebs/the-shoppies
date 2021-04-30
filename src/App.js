import React from 'react';
// import './App.css';
import Search from './components/Search'
import Results from './components/Results'
import Nominations from './components/Nominations'

class App extends React.Component {
  state = {
    searchInput: "",
    results: [],
    nominations: []
  }

  updateSearch = input => {
    this.setState({searchInput: input.split(' ').join('+')})
    fetch(`http://www.omdbapi.com/?t=${this.state.searchInput}&apikey=e26e6632&type=movie`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results}))
  }

  nominateMovie = movie => {
    this.setState({nominations: [...this.state.nominations, movie]})
  }

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <Search updateSearch={this.updateSearch}/><br/>
        {this.state.searchInput ? <Results searchInput={this.state.searchInput} results={this.state.results} nominateMovie={this.nominateMovie}/> : null}<br/>
        <Nominations nominations={this.state.nominations}/>
      </div>
    );
  }
}

export default App;


