/* eslint-disable */ 
import React from 'react';
import BookItem from './BookItem';
import {useSelector} from 'react-redux';

function BookList() {
  const bookList = useSelector((state)=>state.books);
  return (
    <ul>
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
