import { STATUS_RESPONSE } from '../constant';
import baseApi from './baseApi';

const threads = (() => {
  async function createThread({ title, body, category }) {
    const response = await baseApi.postWithAuth('threads', { title, body, category });
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.thread;
  }

  async function getAllThreads() {
    const response = await baseApi.get('threads');
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.threads;
  }

  async function getThreadDetail(id) {
    const response = await baseApi.get(`threads/${id}`);
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.detailThread;
  }

  return {
    createThread,
    getAllThreads,
    getThreadDetail,
  };
})();

export default threads;
