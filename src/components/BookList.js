import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      author: 'john wick',
      title: 'life',
    },
    {
      id: 1,
      author: 'ali',
      title: 'death',
    },
    {
      id: 1,
      author: 'kilyan morfiy',
      title: 'peaky blinder',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
