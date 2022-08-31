// Action

const STATUS = 'src/catogories/STATUS';

// Action creater

export const checkStatus = (catogories) => ({ type: STATUS, catogories });
// Reducer

const categoryReducerr = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default categoryReducerr;
