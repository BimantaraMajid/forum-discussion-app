import React from 'react';
import { FaChartLine, FaHome, FaUserAlt } from 'react-icons/fa';
import { IoChatboxEllipses } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === location.pathname) return 'btn-warning';
    return 'text-black btn-outline-warning';
  };

  return (
    <div className="sidebar border-end">
      <ListGroup className="text-black">
        <Link
          to="/"
          active
          color="secondary"
          className={`btn text-start border-0 mx-2 my-1 ${isActive('/')} `}
        >
          <FaHome size={20} className="me-2" />
          <span>Home</span>
        </Link>
        <Link
          to="/leaderboards"
          active
          color="secondary"
          className={`btn text-start border-0 mx-2 my-1 ${isActive('/leaderboards')} `}
        >
          <FaChartLine size={20} className="me-2" />
          Leaderboards
        </Link>
        <Link
          to="/me"
          active
          color="secondary"
          className={`btn text-start border-0 mx-2 my-1 ${isActive('/me')} `}
        >
          <FaUserAlt size={20} className="me-2" />
          Profile
        </Link>
        <hr />
        <Link
          to="/thread/create"
          active
          color="secondary"
          className={`btn text-start border-0 mx-2 my-1 ${isActive('/thread/create')} `}
        >
          <IoChatboxEllipses size={20} className="me-2" />
          New Thread
        </Link>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
