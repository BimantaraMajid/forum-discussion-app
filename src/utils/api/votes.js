import { STATUS_RESPONSE } from '../constant';
import baseApi from './baseApi';

const votes = (() => {
  async function upVoteThread(id) {
    const response = await baseApi.postWithAuth(`threads/${id}/up-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  async function downVoteThread(id) {
    const response = await baseApi.postWithAuth(`threads/${id}/down-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  async function neutralVoteThread(id) {
    const response = await baseApi.postWithAuth(`threads/${id}/neutral-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  async function upVoteComment(threadId, commentId) {
    const response = await baseApi.postWithAuth(`threads/${threadId}/comments/${commentId}/up-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  async function downVoteComment(threadId, commentId) {
    const response = await baseApi.postWithAuth(`threads/${threadId}/comments/${commentId}/down-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  async function neutralVoteComment(threadId, commentId) {
    const response = await baseApi.postWithAuth(`threads/${threadId}/comments/${commentId}/neutral-vote`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.vote;
  }

  return {
    upVoteThread,
    downVoteThread,
    neutralVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
  };
})();

export default votes;
