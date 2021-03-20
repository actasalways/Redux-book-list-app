import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    
  renderContent() {

    const { selectedBook } = this.props;
    if (selectedBook.isbn) {
      return <div>{selectedBook.title}</div>;
    }
    return <div>Seçilen Kitap yok.</div>;

  }

  render() {

    return <div>
        {this.renderContent() }
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook,
  };
};

export default connect(mapStateToProps)(BookDetail);
