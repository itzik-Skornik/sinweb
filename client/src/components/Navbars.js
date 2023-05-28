// import { Link} from "react-router-dom";
// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// function Navbars({isLoggedIn,logOut}) {

//   return (
//     <div>
//        <Navbar bg="light" expand="lg">
//       <Container style={{backgroundColor:"#ffffb3"}}>
//         <Navbar.Brand href="#home" >{<img src="logo.jpg" width={'100px'} height={'50px'} />}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">דף הבית</Nav.Link>
//             <Nav.Link href="/About">אודות</Nav.Link>
//             <NavDropdown title="גלריית תמונות" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">    הבית הכנסת</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">     שמחת בית השואבה</NavDropdown.Item>
//               <NavDropdown.Item href="/carousel">    ערב התאספות בבית המדרש</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/profile">אזור אישי </Nav.Link>
//             <Nav.Link href="/About">הודעות ועידכונים</Nav.Link>
//             <Nav.Link href="/About">תרומות ונדבות </Nav.Link>
//             <Nav.Link href="/About"> יצירת קשר</Nav.Link>
//             <Nav.Link href="/singUp1">  הרשמה</Nav.Link>
//             {isLoggedIn ? (<Nav.Link onClick={logOut(false)}>  יציאה</Nav.Link>)
//     : (<Nav.Link href="/login1">  כניסה</Nav.Link>)}
//             <NavDropdown title="זמני תפילות" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">זמני תפילות חול</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">זמני תפילות שבתות ומעודים</NavDropdown.Item>


//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//  <hr/>

//     {/* <Navbar  bg="primary" variant="dark">
//     //     <Container>

//     //       <Nav  className="me-auto">
//     //         <Nav.Link href="/">Home</Nav.Link>
//     //         <Nav.Link href="/profile">profile</Nav.Link>
//     //         <Nav.Link href="/about">About</Nav.Link>
//     //         <Nav.Link href="/singUp">singUp</Nav.Link>

//     //       </Nav>
//     //     </Container>
//     //   </Navbar> */}
//      {/* <nav style={{textAlign:"center",marginTop: '20px',backgroundColor:"green",height:"50px"}}>
//   //   <Link to ='/singUp' style={{padding: "20px",marginTop: '150px'}}>singUp</Link>
//   //   <Link to ='/' style={{padding: "10px"}}>Home</Link>
//   //   <Link to ='/profile' style={{padding: "10px"}}>profile</Link>
//   //   <Link to ='/about' style={{padding: "10px"}}>About</Link>
//   //  </nav> */}

//   </div>)
// }

// export default Navbars

import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Navbars({ isLoggedIn, logOut }) {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ffffb3", height: "100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div>
          <Navbar.Brand href="/" >{<img src="logo.jpg" width={'150px'} height={'100px'} />}</Navbar.Brand>

        </div>
        <div>
          <Nav className="me-auto">
            <Link class="nav-link" to="/">דף הבית</Link>
            <Link class="nav-link" to="/About">אודות</Link>
            <NavDropdown title="גלריית תמונות" id="basic-nav-dropdown">
              <Link class="nav-link" to="#action/3.1">הבית הכנסת</Link>
              <Link class="nav-link" to="#action/3.2">שמחת בית השואבה</Link>
              <Link class="nav-link" to="/carousel">ערב התאספות בבית המדרש</Link>
            </NavDropdown>
            <Link class="nav-link" to="/Updates">שמחות ועידכונים</Link>
            <Link class="nav-link" to="/Donations">תרומות ונדבות</Link>
            <Link class="nav-link" to="/Contact">יצירת קשר</Link>
            <NavDropdown title="זמני תפילות" id="basic-nav-dropdown">
              <Link class="nav-link" to="/yomcol">זמני תפילות חול</Link>
              <Link class="nav-link" to="/tabla">זמני תפילות שבתות ומעודים</Link>
            </NavDropdown>
            {isLoggedIn && <Nav.Link onClick={() => logOut(false)}>יציאה</Nav.Link>}
          </Nav>
        </div>
        <div>
        {isLoggedIn ? (
              <Link class="nav-link" to="/Profile">
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </Link>
          ) : (
            <Link class="nav-link" to="/login">
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </Link>
          )}
        </div>


      </div>
    </div>

    // <div>
    //   <Navbar bg="light" expand="lg">
    //     <Container style={{ backgroundColor: "#ffffb3" }}>
    //       <Navbar.Brand href="/" >{<img src="logo.jpg" width={'100px'} height={'50px'} />}</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Link class="nav-link" to="/">דף הבית</Link>
    //           <Link class="nav-link" to="/About">אודות</Link>
    //           <NavDropdown title="גלריית תמונות" id="basic-nav-dropdown">
    //             <Link class="nav-link" to="#action/3.1">הבית הכנסת</Link>
    //             <Link class="nav-link" to="#action/3.2">שמחת בית השואבה</Link>
    //             <Link class="nav-link" to="/carousel">ערב התאספות בבית המדרש</Link>
    //           </NavDropdown>

    //           <Link class="nav-link" to="/About">הודעות ועידכונים</Link>
    //           <Link class="nav-link" to="/Donations">תרומות ונדבות </Link>
    //           <Link class="nav-link" to="/Contact">יצירת קשר</Link>
    //           {/* <Link class="nav-link" to="/singup">הרשמה</Link> */}
    //           <NavDropdown title="זמני תפילות" id="basic-nav-dropdown">
    //             <Link class="nav-link" to="/yomcol">זמני תפילות חול</Link>
    //             <Link class="nav-link" to="/tabla">זמני תפילות שבתות ומעודים</Link>
    //           </NavDropdown>
    //           {/* <Link to="/login" className="nav-link"  >
    //             איזור אישי 
    //           </Link> */}
    //           {isLoggedIn ?
    //             <Nav.Link onClick={() => logOut(false) } >יציאה</Nav.Link>
    //             :
    //             <Nav.Link href="/login" ><AccountCircleIcon /></Nav.Link>
    //           }
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   <hr />
    // </div>
  )
}

export default Navbars;
