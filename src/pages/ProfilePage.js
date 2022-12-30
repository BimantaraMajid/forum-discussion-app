import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const {
    authUser,
  } = useSelector((states) => states);

  if (!authUser?.id) return null;

  return (
    <section className="profile-page">
      <div>
        <img className="avatar" src={authUser.avatar} alt="user" />
      </div>
      <div>
        <span className="name">
          {authUser.name}
        </span>
      </div>
      <div>
        <span className="email">
          {authUser.email}
        </span>
      </div>
    </section>
  );
}

export default ProfilePage;
