import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import LeaderboardsItem from '../components/LeaderboardsItem';
import { asyncGetLeaderboars } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboars());
  }, [dispatch]);

  return (
    <Container className="px-5 py-3">
      <Row>
        <Col className="d-flex justify-content-between">
          <h3>Most Active User</h3>
          <h5>Score</h5>
        </Col>
        <hr />
        {
          leaderboards.map((leaderboard) => (
            <LeaderboardsItem key={leaderboard.user.id} leaderboard={leaderboard} />
          ))
        }
      </Row>
    </Container>
  );
}

export default LeaderboardsPage;
