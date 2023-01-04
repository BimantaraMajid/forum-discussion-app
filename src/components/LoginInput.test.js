import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'majid@gmail.com');
    expect(emailInput).toHaveValue('majid@gmail.com');
  });

  it('should handle email typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'qwer1234');
    expect(passwordInput).toHaveValue('qwer1234');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'usernametest');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'passwordtest');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      email: 'usernametest',
      password: 'passwordtest',
    });
  });
});
