import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { userShape } from './ThreadItem';

function LeaderboardsItem({ leaderboard }) {
  return (
    <Col sm={12} className="d-flex justify-content-between">
      <h3 className="text-capitalize">
        <img src={leaderboard.user.avatar} alt="user" className="rounded-circle me-2" />
        {leaderboard.user.name}
      </h3>
      <h5>{leaderboard.score}</h5>
    </Col>
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
