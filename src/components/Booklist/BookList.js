import React from 'react';
import Book from './Book/Book';
import './BookList.css';

class BookList extends React.Component{
    
    
    render(){
        const bookList = this.props.books.map((book, i) => 
            <Book 
                key={i}
                title={book.volumeInfo.title}
                author={typeof book.volumeInfo.authors==="undefined"?"Unknown":book.volumeInfo.authors[0]}
                price={(book.saleInfo.saleability==="FREE")?"FREE":(book.saleInfo.saleability==="NOT_FOR_SALE")?"Not for sale":book.saleInfo.listPrice.amount}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                />
            
        );
        console.log(bookList);

        return(
            <div className={bookList}>
                {bookList}
            </div>
        )
    }
}

export default BookList;