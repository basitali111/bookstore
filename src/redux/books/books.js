import booksURL from '../../apiURL';

// Action
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const GET_BOOKLIST = 'GET_BOOKLIST';

// Action creators
// Add book
export const addBook = (book) => async (dispatch) => {
  const response = await fetch(booksURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: 'Action',
    }),
  });
  if (response.ok) {
    dispatch({ type: ADD_BOOK, book });
  }
};

// Get book list

export const getBooklist = () => async (dispatch) => {
  const response = await fetch(booksURL);
  const data = await response.json();
  const bookList = [];
  Object.keys(data).forEach((ID) => {
    bookList.push({ ...data[ID][0], item_id: ID });
  });
  if (response.ok) {
    dispatch({
      type: GET_BOOKLIST,
      payload: bookList,
    });
  }
};

export const deleteBook = (bookID) => async (dispatch) => {
  const response = await fetch(`${booksURL}/${bookID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookID,
    }),
  });
  if (response.ok) {
    dispatch({
      type: DELETE_BOOK,
      payload: bookID,
    });
  }
};

const initialState = [];

// Defining Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case GET_BOOKLIST:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
