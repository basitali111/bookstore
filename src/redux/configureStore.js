import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducerr from './categories/categories';

const rootReducer = {
  books: bookReducer,
  categories: categoryReducerr,
};

const store = configureStore(rootReducer);

export default store;
