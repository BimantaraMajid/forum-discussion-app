import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormGroup>
        <Input type="email" value={email} bsSize="lg" onChange={onEmailChange} placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" value={password} bsSize="lg" onChange={onPasswordChange} placeholder="Password" />
      </FormGroup>
      <Button color="primary" type="submit" size="lg" block>Login</Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
