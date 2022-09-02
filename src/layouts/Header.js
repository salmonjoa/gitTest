import React, { useState } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import SignUpModal from "../modals/SignUpModal";
import SignInModal from "../modals/SignInModal";
//SignUp 회원가입 SignIn 로그인
const Header = () => {
  const [SignUp, setSignUp] = useState(false);
  const [Login, setSignIn] = useState(false);

  return (
    <div>
      <SignUpModal show={SignUp} onHide={() => setSignUp(false)} />
      <SignInModal show={Login} onHide={() => setSignIn(false)} />
      <header>

        <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             <Nav>
                <Nav.Link>
                  <Button variant="info" onClick={() => setSignIn(true)}>
                    로그인
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button variant="warning" onClick={() => setSignUp(true)}>
                    회원가입
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
       

      </header>
    </div>
  );
};

export default Header;
