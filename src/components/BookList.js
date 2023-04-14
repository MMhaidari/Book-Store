import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((store) => store.books);
  let info;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    info = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    info = (
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  } else if (status === 'failed') {
    info = <div>{error}</div>;
  }

  return <div>{info}</div>;
};

export default BooksList;
