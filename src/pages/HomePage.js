import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAdd from '../components/ButtonAdd';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (text) => {
    // dispatch(asyncAddThread({ text }));
  };

  const onUpVotes = (id, currentValue) => {
    dispatch(asyncNeutralVoteThread(id));
    if (!currentValue) {
      dispatch(asyncUpVoteThread(id));
    }
  };

  const onDownVotes = (id, currentValue) => {
    dispatch(asyncNeutralVoteThread(id));
    if (!currentValue) {
      dispatch(asyncDownVoteThread(id));
    }
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      {/* <ThreadInput addThread={onAddThread} /> */}
      <ThreadList
        threads={threadList}
        upVotes={onUpVotes}
        downVotes={onDownVotes}
      />
      <ButtonAdd />
    </section>
  );
}

export default HomePage;
