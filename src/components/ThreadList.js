import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads,
  upVotes,
  downVotes,
}) {
  return (
    <div className="threads-list">
      {
        threads.map((thread) => (
          // <ThreadItem />
          <ThreadItem
            key={thread.id}
            {...thread}
            upVotes={upVotes}
            downVotes={downVotes}
          />
        ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVotes: PropTypes.func.isRequired,
  downVotes: PropTypes.func.isRequired,
};

export default ThreadList;
