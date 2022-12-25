import { STATUS_RESPONSE } from '../constant';
import baseApi from './baseApi';

const users = (() => {
  async function login({ email, password }) {
    const response = await baseApi.post('login', { email, password });
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.token;
  }

  async function register({ name, email, password }) {
    const response = await baseApi.post('register', { name, email, password });
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.user;
  }

  async function getAllUsers() {
    const response = await baseApi.get('users');
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.users;
  }

  async function getOwnProfile() {
    const response = await baseApi.getWithAuth('users/me');
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.user;
  }

  return {
    login,
    register,
    getAllUsers,
    getOwnProfile,
  };
})();

export default users;
