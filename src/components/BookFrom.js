import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [enteredTitle, setTitle] = useState('');
  const [enteredAuthor, setAuthor] = useState('');

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const itemId = uuidv4();
    const book = {
      id: itemId,
      title: enteredTitle,
      author: enteredAuthor,
    };
    dispatch(addBook(book));
    window.location.reload();
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="title" value={enteredTitle} onChange={onChangeTitle} placeholder="Book title" required />
      <input className="author-input" type="text" value={enteredAuthor} name="author" onChange={onChangeAuthor} placeholder="Book author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default BookForm;
