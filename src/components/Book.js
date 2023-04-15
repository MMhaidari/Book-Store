/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-intial--info" key={book.id}>
        <div className="title-author">
          <h3 className="title">{book.title}</h3>
          <h3 className="author">{book.author}</h3>
        </div>
        <div className="btn-container">
          <button type="button">
            Comments
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </button>
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="completion-percentage">
        <div className="oval-2"></div>
        <div className="percentage">
          {Math.floor(Math.random() * (99 - 0)) + 0}
          <span>%</span>
          <br />
          <span>completed</span>
        </div>
        <div className="Line-2"></div>
      </div>
      <div className="chapter">
        <h4 className="current">current chapter</h4>
        <h4 className="chapter-no">
          Chapter
          {' '}
          {Math.floor(Math.random() * (50 - 0)) + 1}
        </h4>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
