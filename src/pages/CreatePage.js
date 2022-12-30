import React from 'react';
import { useDispatch } from 'react-redux';
import ThreadCreateInput from '../components/ThreadCreateInput';
import { asyncAddThread } from '../states/threads/action';

function CreatePage() {
  const dispatch = useDispatch();

  const onCreateThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <ThreadCreateInput createThread={onCreateThread} />
  );
}

export default CreatePage;
