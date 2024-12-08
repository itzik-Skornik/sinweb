import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { userContext } from '../App';
import './Navbars.css';
function Navbars({ isLoggedIn, logOut }) {
  const { bage, setBage, user, setProfileKey } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  // פונקציה לבדיקה אם הקישור הוא הנוכחי
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container style={{ backgroundColor: "#ffffb3" }}>
        <Navbar.Brand className="d-flex align-items-center">
          <img src="/logo.jpg" width={'100px'} height={'50px'} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Link
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              to="/"
            >
              דף הבית
            </Link>
            <Link
              className={`nav-link ${isActive('/About') ? 'active' : ''}`}
              to="/About"
            >
              אודות
            </Link>
            <NavDropdown
              title="גלריית תמונות"
              id="basic-nav-dropdown"
              className={isActive('/carousel') ? 'active' : ''}
            >
              <Link className="dropdown-item" to="#action/3.1">הבית הכנסת</Link>
              <Link className="dropdown-item" to="#action/3.2">שמחת בית השואבה</Link>
              <Link className="dropdown-item" to="/carousel">ערב התאספות בבית המדרש</Link>
            </NavDropdown>
            <Link
              className={`nav-link ${isActive('/Updates') ? 'active' : ''}`}
              to="/Updates"
            >
              שמחות ועידכונים
            </Link>
            <Link
              className={`nav-link ${isActive('/Donations') ? 'active' : ''}`}
              to="/Donations"
            >
              תרומות ונדבות
            </Link>
            <Link
              className={`nav-link ${isActive('/Contact') ? 'active' : ''}`}
              to="/Contact"
            >
              יצירת קשר
            </Link>
            <NavDropdown title="זמני תפילות" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/yomcol">זמני תפילות חול</Link>
              <Link className="dropdown-item" to="/tabla">זמני תפילות שבתות ומעודים</Link>
            </NavDropdown>
          </Nav>

          {isLoggedIn && (
            <Nav.Link onClick={() => logOut(false)}>יציאה</Nav.Link>
          )}
        </Navbar.Collapse>

        {isLoggedIn && (
          <Badge badgeContent={bage} color="primary">
            <div onClick={() => { setProfileKey(3); navigate("/profile") }}>
              <MailIcon color="action" />
            </div>
          </Badge>
        )}

        <Nav>
          <Link
            className="nav-link"
            onClick={() => setProfileKey(0)}
            to={isLoggedIn ? (user.manager ? "/manager" : "/profile") : "/login"}
          >
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;
