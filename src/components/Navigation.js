import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Navbar,
  NavbarBrand,
  NavbarText,
} from 'reactstrap';
import { FaRegUser, FaSignOutAlt } from 'react-icons/fa';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar fixed="top" className="p-0 shadow-sm" color="white">
      <NavbarBrand>
        <Link to="/">
          <img src="/logo.png" alt="brand_logo" height={30} />
        </Link>
      </NavbarBrand>
      <NavbarText>
        <Input type="search" className="search-input rounded-pill bg-light" color="light" placeholder="Search Discussion" />
      </NavbarText>
      <NavbarText>
        <Dropdown toggle={toggle} isOpen={dropdownOpen} color="link">
          <DropdownToggle color="link" className="text-decoration-none text-black text-capitalize">
            {name}
            <img src={avatar} alt={id} title={name} className="rounded-circle fa ms-1" height={30} />
          </DropdownToggle>
          <DropdownMenu className="border shadow">
            <DropdownItem>
              <Link to="/me" className="text-decoration-none text-capitalize">
                <FaRegUser className="me-1" />
                Profile
              </Link>
            </DropdownItem>
            <DropdownItem onClick={signOut}>
              <FaSignOutAlt className="me-1" />
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarText>
    </Navbar>
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
