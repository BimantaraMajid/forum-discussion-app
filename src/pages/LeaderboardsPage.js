import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <section className="home-page">
      <h3>Most Active User</h3>
      <div className="threads-list">
        <div className="thread-item">
          <div className="thread-item__user-photo">
            Pengguna
          </div>
          <div className="thread-item__detail">
            <header>
              <div className="thread-item__user-info" />
              <p className="thread-item__created-at">Skor</p>
            </header>
          </div>
        </div>
        {
        leaderboards.map((leaderboard) => (
          <LeaderboardsItem key={leaderboard.user.id} leaderboard={leaderboard} />
        ))
      }
      </div>
    </section>
  );
}

export default LeaderboardsPage;
