import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
