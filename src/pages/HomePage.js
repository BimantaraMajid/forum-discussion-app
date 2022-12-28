import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAdd from '../components/ButtonAdd';
import ThreadList from '../components/ThreadList';
import { receiveTagsActionCreator } from '../states/isFilterTag/action';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncDownVoteThread, asyncNeutralVoteThread,
  asyncUpVoteThread, neutralVoteThreadActionCreator,
} from '../states/threads/action';

function HomePage() {
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
    isfilter,
  } = useSelector((states) => states);
  const activeFilter = isfilter
    .filter((val) => val.isActive === true)
    .map((val) => val.name);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVotes = (id, currentValue) => {
    dispatch(neutralVoteThreadActionCreator({ id, userId: authUser.id }));
    if (!currentValue) {
      dispatch(asyncUpVoteThread(id));
    } else {
      dispatch(asyncNeutralVoteThread(id));
    }
  };

  const onDownVotes = (id, currentValue) => {
    dispatch(neutralVoteThreadActionCreator({ id, userId: authUser.id }));
    if (!currentValue) {
      dispatch(asyncDownVoteThread(id));
    } else {
      dispatch(asyncNeutralVoteThread(id));
    }
  };

  const onFilterTag = (event) => {
    const tag = event.target?.value;
    const tags = (isfilter ?? []).map((val) => {
      if (val.name === tag) {
        return {
          name: val.name,
          isActive: !val.isActive,
        };
      }
      return val;
    });
    dispatch(receiveTagsActionCreator(tags));
  };

  let threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  if (activeFilter?.length) {
    threadList = threadList.filter((thread) => activeFilter.includes(thread.category));
  }

  const activeClassButton = (isActive) => {
    if (isActive) return 'category-item selected';
    return 'category-item';
  };

  return (
    <section className="home-page">
      <div className="filter-tag-threads">
        {
          isfilter.map((tag) => (
            <button
              type="button"
              className={activeClassButton(tag.isActive)}
              key={tag.name}
              value={tag.name}
              onClick={onFilterTag}
            >
              {tag.name}
            </button>
          ))
        }
      </div>
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
