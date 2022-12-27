import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardsItem({ leaderboard }) {
  return (
    <div className="thread-item align-center">
      <div className="thread-item__user-photo">
        <img src={leaderboard.user.avatar} alt="user" />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            {leaderboard.user.name}
          </div>
          <p className="thread-item__created-at">{leaderboard.score}</p>
        </header>
      </div>
    </div>
  );
}

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardsItem.propTypes = {
  leaderboard: PropTypes.shape(leaderboardShape).isRequired,
};

export default LeaderboardsItem;
