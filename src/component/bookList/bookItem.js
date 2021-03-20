import React from "react";

const BookItem = ({ book }) => {
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
              <div className="ui basic green button">Chose</div>
              <div className="ui basic red button">Delete</div>
            </div>
          </div>
        </div>
      </div> <br/>
    </div>
  );
};

export default BookItem;
