/* eslint-disable */ 
import React from 'react';

function BookItem(props) {
  const { author, title } = props.book;
  return (
    <li>
      <div>
        <p>Actions</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <p>comments</p>
        <button type="button">Remove</button>
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
