import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TestApi from './pages/TestApi';
import LoginPage from './pages/LoginPage';
import Loading from './components/Loading';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { asyncUnsetAuthUser } from './states/authUser/action';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/api-test" element={<TestApi />} />
          </Routes>
        </main>
      </>

    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
            <Route path="/api-test" element={<TestApi />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
