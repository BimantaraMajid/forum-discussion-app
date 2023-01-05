import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

function ThreadCreateInput({
  createThread,
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const createThreadHandler = (e) => {
    e.preventDefault();
    if (body.trim() && title.trim() && category.trim()) {
      createThread({ title, body, category });
      setTitle('');
      setCategory('');
      setBody('');
    }
  };

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleCategoryChange = ({ target }) => {
    setCategory(target.value);
  };

  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 1000) {
      setBody(target.value);
    }
  };

  return (
    <Form onSubmit={createThreadHandler}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategoryChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          rows="5"
          placeholder="Type something...."
          value={body}
          onChange={handleBodyChange}
          required
        />
        <small>
          <strong>{body.length}</strong>
          /2000
        </small>
      </FormGroup>
      <Button block type="submit" color="primary">Save</Button>
    </Form>
  );
}

ThreadCreateInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default ThreadCreateInput;
