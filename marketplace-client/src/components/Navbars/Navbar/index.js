import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarRY = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light>
      <div>
        <Link to="/">
          <NavbarBrand className="mr-auto">Remote Year</NavbarBrand>
        </Link>
      </div>
      <div>
        <Link to="/user">
          <FiUser color="#1eb5b2" size="1.5em" style={{ marginRight: "2vh" }}></FiUser>
        </Link>
        <Link to="/user/cart">
          <FiShoppingCart color="#1eb5b2" size="1.5em" style={{ marginRight: "2vh" }}></FiShoppingCart>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      </div>
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Cities
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/lisbon">
                  <NavLink>Lisbon</NavLink>
                </Link>
              </DropdownItem>
              <DropdownItem disabled>
                <NavLink>Cape Town</NavLink>
              </DropdownItem>
              <DropdownItem disabled>Coming Soon...</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Side Trips
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                
                <NavLink href="/">Lisbon</NavLink>
              </DropdownItem>
              <DropdownItem disabled>
                <NavLink href="/">Cape Town</NavLink>
              </DropdownItem>
              <DropdownItem>Coming Soon...</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <DropdownItem>
            <Link to="/admin/lisbon">
              <NavLink>Admin</NavLink>
            </Link>
          </DropdownItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret disabled>
              Citizens
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Coming Soon...</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/">Lisbon</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/">Cape Town</NavLink>
              </DropdownItem>
              <DropdownItem>Coming Soon...</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarRY;
