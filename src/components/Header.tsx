import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/لوجو المجد .jpg'
const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm py-2 sticky-top">
      <Container>
   
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top me-2"
            alt="شركة المجد"
          />
          <span className="fw-bold text-primary d-none d-sm-inline">المجد للطباعة</span>
        </Navbar.Brand>

     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto ms-lg-4">
            <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/about">من نحن</Nav.Link>
          </Nav>

    
          <Nav className="align-items-center">

            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 me-lg-3">
              <Button as={Link as any} to="/login" variant="outline-primary" className="rounded-pill px-4">
                دخول
              </Button>
              <Button as={Link as any} to="/register" variant="primary" className="rounded-pill px-4">
                تسجيل
              </Button>
            </div>
            <NavDropdown 
              title={<FaUserCircle size={30} className="text-secondary" />} 
              id="user-dropdown" 
              align="end"
              className="d-none d-lg-block"
            >
              <NavDropdown.Item as={Link} to="/profile">حسابي</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">الإعدادات</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-danger">تسجيل الخروج</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
