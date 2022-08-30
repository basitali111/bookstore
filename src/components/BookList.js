import React from "react";
import BookItem from "./BookItem";

function BookList(props) {
  const { bookList } = props;
  return (
    <ul>
      {bookList.map((book) => (
        <BookItem key={book.book_id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
