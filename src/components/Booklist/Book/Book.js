import React from 'react';
import MoreInfo from './MoreInfo/MoreInfo';
import './Book.css';

class Book extends React.Component{
    static defaultProps={
        key: '',
        title: '',
        author: '',
        price: '',
        description: '',
        image: '',
        link: '',
    }

    render(){
        return(
            <section className="Book">
                <h2 className="book_title">{this.props.title}</h2>
                <div className="book_content">
                    <section className="book_cover">
                        <img src={this.props.image} alt="book-cover" />
                    </section>
                    <section className="book_info">
                        <p className="book_author">Author: {this.props.author}</p>
                        <p className="book_price">Price: {this.props.price}</p>
                        <p className="book_description">{this.props.description}</p>
                        <MoreInfo link={this.props.link}/>
                    </section>
                </div>
            </section>
        )
    }
}

export default Book;