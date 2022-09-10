/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import CircularProgress from '@mui/material/CircularProgress';
function BookItem(props) {
  const { book } = props;
  const id = book.item_id;
  const dispatch = useDispatch();

  return (
   <li className="book">
      <div className="book-content">
        <p>{book.category}</p>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <div className="actions">
          <button type="button">Comments</button>
          <button type="button" className="remove-btn"  onClick={() => { dispatch(deleteBook(id)); }}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress-section">
        <div className="progress-status">
          <div className="progress-grey-circle">
            <CircularProgress variant="determinate" value={25} />
            <div className="progress-circle-middle" />
          </div>
          <div className="progress-percent">
            {`25%`}
            <br />
            <span>Completed</span>
          </div>
        </div>
        <div className="update-progress" >
          <div className="chapter">Chapter</div>
          <div className="chapter" >1</div>
          <button id={id} type="submit" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
