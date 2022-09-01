import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusClickHandler = () => {
    dispatch(checkStatus('under construction'));
  };

  return (
    <div className="categories">
      <button type="button" onClick={statusClickHandler}>
        Check status
      </button>
      <span className="message">{message}</span>
    </div>
  );
};

export default CategoriesPage;
