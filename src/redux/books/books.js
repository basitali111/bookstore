// Action
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

// Action creators

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
});

const initialState = [];

// Defining Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return [...state.filter((payload) => payload.id !== action.payload.id)];
    default:
      return state;
  }
};

export default bookReducer;
