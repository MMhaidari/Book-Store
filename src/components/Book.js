/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const categoriesBook = ['action', 'comdy', 'thriller', 'history', 'family', 'fantecy', 'joke'];
const randomCategories = Math.floor(Math.random() * categoriesBook.length);
const randomItem = categoriesBook[randomCategories];

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(Math.floor(Math.random() * 99));

  const handleClick = () => {
    setPercent((prevState) => (prevState >= 100 ? prevState : prevState + 10));
  };

  return (
    <div className="book-container">
      <div className="book-intial--info" key={book.id}>
        <div className="title-author">
          <h4 className="category-random">{randomItem}</h4>
          <h3 className="title">{book.title}</h3>
          <h3 className="author">{book.author}</h3>
        </div>
        <div className="btn-container">
          <button type="button">
            Comments
          </button>
          <div className="Line-1"></div>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </button>
          <div className="Line-1"></div>
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar value={percent} styles={buildStyles({ pathColor: '#0290ff' })} />
        </div>
        <div className="percent">
          <p className="percentage">
            {percent}
            %
          </p>
          <span className="competed">Completed</span>
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
        <button type="button" className="update-progress" handleClick={handleClick}>UPDATE PROGRESS</button>
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
