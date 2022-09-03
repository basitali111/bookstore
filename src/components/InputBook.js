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
    <div>
      <h3>Add a new book</h3>
      <form onSubmit={addBookHandler}>
        <input type="text" placeholder="Title..." required onInput={(e) => settitle(e.target.value)} />
        <input type="text" placeholder="author" required onInput={(e) => setauthor(e.target.value)} />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default InputBook;
