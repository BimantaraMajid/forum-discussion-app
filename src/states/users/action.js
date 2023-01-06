import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      const user = await api.register({ name, email, password });
      dispatch(receiveUsersActionCreator(user));
      alert('Register Success');
    } catch (error) {
      alert(error.message);
      dispatch(receiveUsersActionCreator(null));
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
