import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component{
    render(){
        return(
            <section className="search_input">
                <form>
                    <label htmlFor='search_input'>Search:</label>
                    <input type='text' name='search_input' id='search_input' placeholder='Enter search terms' value={this.props.searchTerm} onChange={e => this.props.changeSearchTerm(e.target.value)}/>
                    <button className="search_button" onClick={(e) => this.props.searchSubmit(e)}>Search</button>
                </form>
            </section>
        )
    }
}

export default SearchInput;