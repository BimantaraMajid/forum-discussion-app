import React from 'react';
import {
  IoAddCircle,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ButtonAdd() {
  const navigate = useNavigate();

  const onClickButtonAdd = () => {
    navigate('/thread/create');
  };

  return (
    <button type="button" className="new-thread-button" onClick={onClickButtonAdd}>
      <IoAddCircle />
    </button>
  );
}

export default ButtonAdd;
