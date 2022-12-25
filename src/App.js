import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TestApi from './pages/TestApi';
import LoginPage from './pages/LoginPage';
import Loading from './components/Loading';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  console.log(authUser, isPreload);

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

export default App;
