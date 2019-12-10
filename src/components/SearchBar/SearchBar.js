import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import FilterOptions from './FilterOptions/FilterOptions';
import './SearchBar.css';

class SearchBar extends React.Component{
    

    
    

    render(){
        return(
            <section className="SearchBar">
                <SearchInput searchTerm={this.props.searchTerm} />
                <FilterOptions printTypeList={this.props.printTypeList} bookTypeList={this.props.bookTypeList} />
            </section>
        )
    }
}

export default SearchBar;