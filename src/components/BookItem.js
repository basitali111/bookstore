import React from 'react';

function BookItem(props) {
  console.log(props);
  const {  author, title } = props.book;
  console.log('Author:', author);
  console.log('title:', title);

  return (
    <li >
      <div>
        <p>Actions</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button>comments</button>
        <button type="button">Remove</button>
        <button>Edit</button>
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
