import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import FilterOptions from './FilterOptions/FilterOptions';
import './SearchBar.css';

class SearchBar extends React.Component{
    

    
    

    render(){
        return(
            <section className="SearchBar">
                <SearchInput 
                    searchTerm={this.props.searchTerm} 
                    changeSearchTerm={(term) => this.props.changeSearchTerm(term)}
                    searchSubmit={(e) => this.props.searchSubmit(e)}
                    />
                <FilterOptions 
                    printTypeSelected={this.props.printTypeSelected} 
                    bookTypeSelected={this.props.bookTypeSelected} 
                    changePrintType={(type) => this.props.changePrintType(type)} 
                    changeBookType={(type) => this.props.changeBookType(type)}/>
            </section>
        )
    }
}

export default SearchBar;