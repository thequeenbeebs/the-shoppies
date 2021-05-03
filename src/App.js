import React from 'react';
// import './App.css';
import Search from './components/Search'
import ResultsContainer from './components/ResultsContainer'
import Nominations from './components/Nominations'
import Banner from './components/Banner'
import Confetti from 'react-dom-confetti'

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
        <Confetti active={this.state.nominations.length === 5 ? "true" : null} />
        {this.state.nominations.length === 5 ? <Banner /> : null}
        <div className="title">
          <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="shopify icon"></img>
          <h1>the shoppies</h1>
        </div>
        <Search updateSearch={this.updateSearch}/><br/>
        {this.state.results["Title"] ? <ResultsContainer searchInput={this.state.searchInput} results={this.state.results} nominateMovie={this.nominateMovie} nominations={this.state.nominations}/> : null}<br/>
        <Nominations nominations={this.state.nominations} removeMovie={this.removeMovie}/>
      </div>
    );
  }
}

export default App;


