import React from 'react';
// import './App.css';
import Search from './components/Search'
import Results from './components/Results'
import Nominations from './components/Nominations'
import Banner from './components/Banner'

class App extends React.Component {
  state = {
    searchInput: "",
    results: [],
    nominations: []
  }

  updateSearch = input => {
    this.setState({searchInput: input.split(' ').join('+')})
    fetch(`http://www.omdbapi.com/?t=${this.state.searchInput}&apikey=e26e6632&type=movie&page=1`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results}))
  }

  nominateMovie = movie => {
    this.setState({nominations: [...this.state.nominations, movie]})
  }

  removeMovie = movie => {
    this.setState({nominations: this.state.nominations.filter(nom => nom["imdbID"] !== movie["imdbID"])})
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <h1>The Shoppies</h1>
        <Search updateSearch={this.updateSearch}/><br/>
        {this.state.results["Title"] ? <Results searchInput={this.state.searchInput} results={this.state.results} nominateMovie={this.nominateMovie} nominations={this.state.nominations}/> : null}<br/>
        <Nominations nominations={this.state.nominations} removeMovie={this.removeMovie}/>
      </div>
    );
  }
}

export default App;


