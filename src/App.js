import React from 'react';
import './App.css';
import Search from './components/Search'
import Results from './components/Results'
import Nominations from './components/Nominations'

class App extends React.Component {
  state = {
    searchInput: ""
  }

  updateSearch = input => {
    this.setState({searchInput: input})
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

//http://www.omdbapi.com/?t=blade+runner&apikey=e26e6632
