import bookList from '../../FakeBookData';
// Action
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Action creators

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  payload: book,
});

const initialState = bookList;

// Defining Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

export default bookReducer;
