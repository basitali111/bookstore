import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  // Hooks
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');

  // State
  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title,
      author,
      item_id: uuidv4(),
    }));
    settitle('');
    setauthor('');
  };

  return (
    <div className="container">
      <div className="add-book-section">
        <h3 className="add-book-section-title">Add a new book</h3>
        <form className="add-book-form" onSubmit={addBookHandler}>
          <input className="form-field" type="text" placeholder="Title..." required onInput={(e) => settitle(e.target.value)} />
          <input className="form-field" type="text" placeholder="author" required onInput={(e) => setauthor(e.target.value)} />
          <button type="submit" className="add-book-btn">Add book</button>
        </form>
      </div>
    </div>
  );
};

export default InputBook;
