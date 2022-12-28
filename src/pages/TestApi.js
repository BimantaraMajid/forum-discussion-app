import React from 'react';
import api from '../utils/api';

function TestApi() {
  const onLogin = () => {
    api.login({ email: 'majid@gmail.com', password: 'qwer1234' })
      .then((token) => {
        api.putAccessToken(token);
      });
  };
  const onRegister = () => {
    api.register({ name: 'majid', email: 'majid2@gmail.com', password: 'qwer1234' });
  };
  const getAllUsers = () => {
    api.getAllUsers();
  };
  const getOwnProfile = () => {
    api.getOwnProfile();
  };

  const createThread = () => {
    api.createThread({ title: 'test', body: 'lorem', category: 'tech' });
  };
  const getAllThread = () => {
    api.getAllThreads();
  };
  const getDetailThread = () => {
    api.getThreadDetail('thread-B3N9KGa87vfMHyBQ');
  };
  const createComment = () => {
    api.createComment({ id: 'thread-B3N9KGa87vfMHyBQ', content: 'lorem comment' });
  };
  const getAllLeaderboards = () => {
    api.getAllLeaderboards();
  };

  // "comment-fJ579RDuAsZdB4ER"
  const upVoteThread = () => {
    api.upVoteThread('thread-B3N9KGa87vfMHyBQ');
  };
  const downVoteThread = () => {
    api.downVoteThread('thread-B3N9KGa87vfMHyBQ');
  };
  const neutralVoteThread = () => {
    api.neutralVoteThread('thread-B3N9KGa87vfMHyBQ');
  };
  const upVoteComment = () => {
    api.upVoteComment('thread-B3N9KGa87vfMHyBQ', 'comment-fJ579RDuAsZdB4ER');
  };
  const downVoteComment = () => {
    api.downVoteComment('thread-B3N9KGa87vfMHyBQ', 'comment-fJ579RDuAsZdB4ER');
  };
  const neutralVoteComment = () => {
    api.neutralVoteComment('thread-B3N9KGa87vfMHyBQ', 'comment-fJ579RDuAsZdB4ER');
  };

  return (
    <>
      <h1>Init Forum Apps</h1>
      <button type="button" onClick={onLogin}>Login</button>
      <button type="button" onClick={onRegister}>register</button>
      <button type="button" onClick={getAllUsers}>getAllUsers</button>
      <button type="button" onClick={getOwnProfile}>getOwnProfile</button>
      <br />
      <button type="button" onClick={createThread}>createThread</button>
      <button type="button" onClick={getAllThread}>getAllThread</button>
      <button type="button" onClick={getDetailThread}>getDetailThread</button>
      <br />
      <button type="button" onClick={createComment}>createComment</button>
      <br />
      <button type="button" onClick={getAllLeaderboards}>getAllLeaderboards</button>
      <br />
      <button type="button" onClick={upVoteThread}>upVoteThread</button>
      <button type="button" onClick={downVoteThread}>downVoteThread</button>
      <button type="button" onClick={neutralVoteThread}>neutralVoteThread</button>
      <button type="button" onClick={upVoteComment}>upVoteComment</button>
      <button type="button" onClick={downVoteComment}>downVoteComment</button>
      <button type="button" onClick={neutralVoteComment}>neutralVoteComment</button>
    </>
  );
}
export default TestApi;
