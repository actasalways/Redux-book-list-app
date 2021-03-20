import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, deleteBook } from "../../actions";

class BookItem extends Component {
  render() {
    const { book } = this.props;

    return (
      <div>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{book.title}</div>
              <div className="description">{book.subtitle}</div>
            </div>

            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button"
                onClick={ ()=>{
                  this.props.selectBook(book)
                } }
                >
                Chose</div>
                <div className="ui basic red button"
                onClick={ ()=>{
                  this.props.deleteBook(book)
                } }
                >
                Delete</div>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
      </div>
    );
  }
}

export default connect(null, { selectBook, deleteBook })(BookItem);
