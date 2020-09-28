import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Button
} from 'reactstrap';

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">K&G Charters</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact Information
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href = "https://m.facebook.com/kevin.martin.94849410">Facebook</NavLink>
                </DropdownItem>
                <DropdownItem>
                  (504)-689-8147
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button>
            <NavLink href = "/Login/">Login</NavLink> 
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;