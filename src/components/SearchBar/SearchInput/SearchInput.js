import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component{
    render(){
        return(
            <section className="search_input">
                <form>
                    <label htmlFor='search_input'>Search:</label>
                    <input type='text' name='search_input' id='search_input' placeholder='Enter search terms' value={this.props.searchTerm}/>
                    <button className="search_button">Search</button>
                </form>
            </section>
        )
    }
}

export default SearchInput;