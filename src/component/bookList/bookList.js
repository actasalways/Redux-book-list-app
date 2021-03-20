import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../../actions";
import BookItem from './bookItem';
import './bookList.css';


class BookList extends Component {
  componentDidMount() {
    this.props.addBook({
      isbn: "432623453",
      title: "Harry",
      subtitle: "sub harry",
      description: "lorem ipsum falan feşmekan",
      author: "J.K Rowling",
      pages: 479,
    });
  }

  render() {
    const { bookList } = this.props;

    return (
      <div className="book-list-container ">
        {bookList.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps, { addBook })(BookList);
