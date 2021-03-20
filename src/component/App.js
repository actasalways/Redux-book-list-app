import React, { Component } from "react";
import BookList from "./bookList/bookList";
import BookDetail from "./bookDetail/bookDetail";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
