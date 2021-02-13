/* eslint-disable prettier/prettier */
const initialState = {
  loader: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADER':
      return {...state, loader: action.value};
    default:
      return state;
  }
};
