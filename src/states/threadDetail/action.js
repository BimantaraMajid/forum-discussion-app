import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL',
  TOGGLE_UP_VOTE_COMMENT_DETAIL: 'TOGGLE_UP_VOTE_COMMENT_DETAIL',
  TOGGLE_DOWN_VOTE_COMMENT_DETAIL: 'TOGGLE_DOWN_VOTE_COMMENT_DETAIL',
  TOGGLE_NEUTRAL_VOTE_COMMENT_DETAIL: 'TOGGLE_NEUTRAL_VOTE_COMMENT_DETAIL',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

// action thread vote
function upVoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralVoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

// action comment vote
function upVoteCommentDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

function neutralVoteCommentDetailActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT_DETAIL,
    payload: {
      userId,
      commentId,
    },
  };
}

// send api get thread detail
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// send api thread vote
function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadDetailActionCreator({ userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteThreadDetailActionCreator({ userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadDetailActionCreator({ userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

// send api comment vote
function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncCommentThreadDetail(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const response = await api.createComment({ threadId, content });
      dispatch(addThreadCommentActionCreator(response));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.neutralVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentDetailActionCreator({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
  asyncCommentThreadDetail,
};
