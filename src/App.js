import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/Booklist/BookList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: '',
      printTypeSelected: 'all',
      bookTypeSelected: 'partial',
      books: [],
    }
  }

  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    })
  }

  changePrintType = (type) => {
    this.setState({
      printTypeSelected: type,
    })
  }

  changeBookType = (type) => {
    this.setState({
      bookTypeSelected: type,
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = 'AIzaSyBsOoPc-NbBSQ5MjBvn5qTFySM7KJGs9LY';
    const searchTermUri = encodeURIComponent(this.state.searchTerm);
    const url = baseUrl + '?key=' + apiKey + '&q=' + searchTermUri + '&printType=' + this.state.printTypeSelected + '&filter=' + this.state.bookTypeSelected; 
    console.log(url);
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong, please try again later');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          books: data.items,
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render(){ 
    return (
      <main className='App'>
        <section className='title_bar'>
          <h1>Google Book Search</h1>
        </section>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          printTypeSelected={this.state.printTypeSelected}
          bookTypeSelected={this.state.bookTypeSelected}
          searchSubmit={(e) => this.handleSearch(e)}
          changeSearchTerm={(term) => this.changeSearchTerm(term)}
          changePrintType={(type) => this.changePrintType(type)}
          changeBookType={(type) => this.changeBookType(type)}/>
        <BookList 
          books={this.state.books}/>
      </main>
    )
  }
}

export default App;