import React from 'react';

const InputBook = () => (
  <div>
    <h3>Add a new book</h3>
    <form>
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="author" />
      <input type="submit" value="submit" />
    </form>
  </div>
);

export default InputBook;
