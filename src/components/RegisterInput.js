import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form, FormGroup, Input,
} from 'reactstrap';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormGroup>
        <Input type="text" bsSize="lg" value={name} onChange={onNameChange} placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input type="text" bsSize="lg" value={email} onChange={onEmailChange} placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" bsSize="lg" value={password} onChange={onPasswordChange} placeholder="Password" />
      </FormGroup>
      <Button type="submit" size="lg" color="primary" block>Register</Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
