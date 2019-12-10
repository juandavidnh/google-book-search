import React from 'react';
import MoreInfo from './MoreInfo/MoreInfo';
import './Book.css';

class Book extends React.Component{
    render(){
        return(
            <section className="Book">
                <h2 className="book_title">Henry I</h2>
                <section className="book_cover">
                    <img src="" alt="" />
                </section>
                <section className="book_info">
                    <p className="book_author">Author: C. Warren Hollister</p>
                    <p className="book_price">Price: $50.00</p>
                    <p className="book_description">The resulting book or whether the book is a free ebook or not.</p>
                    <MoreInfo />
                </section>
            </section>
        )
    }
}

export default Book;