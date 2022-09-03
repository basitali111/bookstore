/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
function BookItem(props) {
  const { book } = props;
  const id = book.item_id;
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <p >{book.category}</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div>
        <p>comments</p>
        <button type="button" onClick={() => { dispatch(deleteBook(id)); }}>Remove</button>
        <p>Edit</p>
      </div>
      <div>Progress</div>
      <div>
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>

    </li>
  );
}

export default BookItem;
