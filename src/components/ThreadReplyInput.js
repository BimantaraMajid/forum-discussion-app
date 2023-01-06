import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input } from 'reactstrap';

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState('');

  const replyThreadHandler = () => {
    if (text.trim()) {
      replyThread(text);
      setText('');
    }
  };

  const handleTextChange = ({ target }) => {
    if (target.value.length <= 1000) {
      setText(target.value);
    }
  };

  return (
    <FormGroup>
      <Input type="textarea" rows={4} placeholder="Comment Thread" value={text} onChange={handleTextChange} />
      <div className="d-flex justify-content-between pt-2">
        <strong>
          {text.length}
          /1000
        </strong>
        <Button type="submit" onClick={replyThreadHandler} className="text-right">Comment</Button>
      </div>
    </FormGroup>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
