import { STATUS_RESPONSE } from '../constant';
import baseApi from './baseApi';

const leaderboards = (() => {
  async function getAllLeaderboards() {
    const response = await baseApi.get('leaderboards');
    const responseJson = await response.json();
    const { status, message, data } = responseJson;

    if (status !== STATUS_RESPONSE.SUCCESS) throw new Error(message);

    return data.leaderboards;
  }

  return {
    getAllLeaderboards,
  };
})();

export default leaderboards;
