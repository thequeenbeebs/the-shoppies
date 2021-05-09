import React from 'react';
import Search from './components/Search'
import ResultsContainer from './components/ResultsContainer'
import Nominations from './components/Nominations'
import Banner from './components/Banner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class App extends React.Component {
  state = {
    searchInput: "",
    results: [],
    nominations: []
  }

  componentDidMount () {
    let noms = localStorage.getItem("nominations")
    if(noms) {
      this.setState({nominations: JSON.parse(noms)})
    }
  }
  

  updateSearch = input => {
    this.setState({searchInput: input.split(' ').join('+')})
    fetch(`https://www.omdbapi.com/?s=${input.split(' ').join('+')}&apikey=e26e6632&type=movie`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results}))
  }

  nominateMovie = movie => {
    this.setState({nominations: [...this.state.nominations, movie]})
    localStorage.setItem("nominations", JSON.stringify([...this.state.nominations, movie]))
  }

  removeMovie = movie => {
    this.setState({nominations: this.state.nominations.filter(nom => nom["imdbID"] !== movie["imdbID"])})
    localStorage.setItem("nominations", JSON.stringify(this.state.nominations.filter(nom => nom["imdbID"] !== movie["imdbID"])))
  }

  render() {
    return (
      <div className="App">
        {this.state.nominations.length === 5 ? <Banner /> : null}
        <div className="title">
          <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="shopify icon"></img>
          <h1>the shoppies</h1>
        </div>

        <Container fluid>    
          <Row content>
            <Col sm={8}>
              <Search updateSearch={this.updateSearch}/><br/>
              <ResultsContainer searchInput={this.state.searchInput} results={this.state.results} nominateMovie={this.nominateMovie} nominations={this.state.nominations}/> <br/>
            </Col>
            <Col sm={4}>
              <Nominations nominations={this.state.nominations} removeMovie={this.removeMovie}/>
            </Col>
          </Row>
        </Container>
    
        
      </div>
    );
  }
}

export default App;


