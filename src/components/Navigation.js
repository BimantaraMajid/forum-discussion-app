import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  IoHome, IoLogOutOutline, IoBarChart,
} from 'react-icons/io5';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="navigation">
      <nav>
        <Link to="/"><IoHome size={30} /></Link>
        <Link to="/leaderboards"><IoBarChart size={30} /></Link>
      </nav>
      <Link to="/me">
        <img src={avatar} alt={id} title={name} />
      </Link>
      <button type="button" onClick={signOut}>
        <IoLogOutOutline size={30} />
      </button>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
