import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import { getBooklist } from '../redux/books/books';

function BookList() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooklist());
  }, []);

  return (
    <ul>
      {bookList.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
