import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState('');
  const navigate = useNavigate('/');

  function replyThreadHandler() {
    if (text.trim()) {
      replyThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 1000) {
      setText(target.value);
    }
  }

  return (
    <div className="thread-reply-input">
      <textarea type="text" placeholder="Comment Thread" value={text} onChange={handleTextChange} />
      <p className="thread-reply-input__char-left">
        <strong>{text.length}</strong>
        /1000
      </p>
      <button type="submit" onClick={replyThreadHandler}>Comment</button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
