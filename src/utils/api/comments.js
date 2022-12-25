import { STATUS_RESPONSE } from '../constant';
import baseApi from './baseApi';

const comments = (() => {
  async function createComment({ id, content }) {
    const response = await baseApi.postWithAuth(`threads/${id}/comments`, { content });
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.comment;
  }

  return {
    createComment,
  };
})();

export default comments;
