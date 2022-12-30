import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCreateInput({
  createThread,
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  function createThreadHandler(e) {
    e.preventDefault();
    if (body.trim() && title.trim() && category.trim()) {
      createThread({ title, body, category });
      setTitle('');
      setCategory('');
      setBody('');
    }
  }

  function handleTitleChange({ target }) {
    setTitle(target.value);
  }

  function handleCategoryChange({ target }) {
    setCategory(target.value);
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 1000) {
      setBody(target.value);
    }
  }

  return (
    <form onSubmit={createThreadHandler}>
      <div className="thread-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategoryChange}
          required
        />
        <textarea
          data-cy="thread-input"
          type="text"
          placeholder="Type something...."
          value={body}
          onChange={handleBodyChange}
          required
        />
        <p className="thread-input__char-left">
          <strong>0</strong>
          /2000
        </p>
        <button data-cy="thread-button" type="submit">Talk</button>
      </div>
    </form>
  );
}

ThreadCreateInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default ThreadCreateInput;
