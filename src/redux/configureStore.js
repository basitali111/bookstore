import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducerr from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducerr,
  },
});
export default store;
