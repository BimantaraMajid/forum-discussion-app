import baseApi from './api/baseApi';
import comments from './api/comments';
import leaderboards from './api/leaderboards';
import threads from './api/threads';
import users from './api/users';
import votes from './api/votes';

const api = {
  ...users,
  ...baseApi,
  ...threads,
  ...comments,
  ...leaderboards,
  ...votes,
};

export default api;
