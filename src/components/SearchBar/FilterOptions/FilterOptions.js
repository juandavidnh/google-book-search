import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component{
    


    render(){
        return(
            <div className="filter_inputs">
                <label htmlFor="print_type">Print Type</label>
                <select id="print_type" name="print_type" onChange={(e) => this.props.changePrintType(e.target.value)}>
                    <option value="">Select one...</option>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book_type">Book Type</label>
                <select id="book_type" name="book_type" onChange={(e) => this.props.changeBookType(e.target.value)}>
                    <option value="">Select one...</option>
                    <option value="partial">Partial Volume Available</option>
                    <option value="full">Full Volume Available</option>
                </select>
            </div>
        )
    }
}

export default FilterOptions;