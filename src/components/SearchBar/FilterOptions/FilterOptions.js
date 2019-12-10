import React from 'react';
import './FilterOptions.css';

class FilterOptions extends React.Component{
    


    render(){
        return(
            <div className="filter_inputs">
                <label htmlFor="print_type">Print Type</label>
                <select id="print_type" name="print_type">
                    <option value="None">Select one...</option>
                </select>
                <label htmlFor="book_type">Print Type</label>
                <select id="book_type" name="book_type">
                    <option value="None">Select one...</option>
                </select>
            </div>
        )
    }
}

export default FilterOptions;