import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

const NavbarAdmin = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <div>
          <Link to="/admin/lisbon">
            <NavbarBrand className="mr-auto">Remote Year</NavbarBrand>
          </Link>
        </div>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
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
            <NavItem>
              <Link to="/admin/lisbon">
                <NavLink>Dashboard</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/vendors/lisbon">
                <NavLink>Vendors</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/products/lisbon">
                <NavLink>Products</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/orders/lisbon">
                <NavLink>Orders</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
