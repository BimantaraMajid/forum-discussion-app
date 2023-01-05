import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import LoginPage from './pages/LoginPage';
import Loading from './components/Loading';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { asyncUnsetAuthUser } from './states/authUser/action';
import LeaderboardsPage from './pages/LeaderboardsPage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import Sidebar from './components/Sidebar';

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
        <Container fluid className="bg-light">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </>

    );
  }

  return (
    <>
      <Loading />
      <Sidebar />
      <Navigation authUser={authUser} signOut={onSignOut} />
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/thread/create" element={<CreatePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
