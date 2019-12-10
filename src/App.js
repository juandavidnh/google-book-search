import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/Booklist/BookList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: 'hugo',
      printTypeSelected: 'all',
      bookTypeSelected: 'partial',
    }
  }

  componentDidMount() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = 'AIzaSyBsOoPc-NbBSQ5MjBvn5qTFySM7KJGs9LY';
    const searchTermUri = encodeURIComponent(this.state.searchTerm);
    const url = baseUrl + '?key=' + apiKey + '&q=' + searchTermUri + '&printType=' + this.state.printTypeSelected + '&filter=' + this.state.bookTypeSelected; 
    console.log(url);
  }

  render(){ 
    return (
      <main className='App'>
        <section className='title_bar'>
          <h1>Google Book Search</h1>
        </section>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          printTypeList={this.state.printTypeList}
          bookTypeList={this.state.bookTypeList}/>
        <BookList 
          searchTerm={this.state.searchTerm}
          printTypeSelected={this.state.printTypeSelected}
          bookTypeSelected={this.state.bookTypeSelected}/>
      </main>
    )
  }
}

export default App;