import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  books: [
    {
      id: '1',
      title: 'alcamist',
      author: 'jon',
    },
    {
      id: '2',
      title: 'hero',
      author: 'ahamd',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return produce(state, (draftState) => {
        const bookIndex = draftState.books.findIndex((book) => book.id === bookId);
        if (bookIndex !== -1) {
          draftState.books.splice(bookIndex, 1);
        }
      });
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
