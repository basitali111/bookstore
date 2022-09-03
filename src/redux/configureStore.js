import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducerr from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducerr,
  },
}, applyMiddleware(thunk));
export default store;
