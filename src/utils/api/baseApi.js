const baseApi = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  async function get(url, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const response = await fetch(`${BASE_URL}/${url}`, { headers });
    return response;
  }

  async function getWithAuth(url) {
    const headers = {
      Authorization: `Bearer ${getAccessToken()}`,
    };
    return get(url, { headers });
  }

  async function post(url, payload, options = {}) {
    const method = 'POST';
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const body = JSON.stringify(payload);
    const response = await fetch(`${BASE_URL}/${url}`, { method, body, headers });
    return response;
  }

  async function postWithAuth(url, payload) {
    const headers = {
      Authorization: `Bearer ${getAccessToken()}`,
    };
    return post(url, payload, { headers });
  }

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  return {
    get,
    getWithAuth,
    post,
    postWithAuth,
    putAccessToken,
    getAccessToken,
  };
})();

export default baseApi;
