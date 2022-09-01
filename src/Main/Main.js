import React from 'react';
import App from './../App.css';
import Nav from 'react-bootstrap/Nav';
import Playground from './Playground';
import ImageSlider from './imageSlider';


function Main() {
  return (
    <>
      <div>
        <h2 className="my">냉장고를 열어라(가제)</h2>
      </div>

      <div>
        <div className="b1">
          <Nav className="bar">
            <Nav.Link className="src" href="/Square">
              광장
            </Nav.Link>
            <br></br>

            <Nav.Link className="src" href="/recipe">
              레시피
            </Nav.Link>
            <br></br>

            <Nav.Link className="src" href="/rangking">
              랭킹
            </Nav.Link>
            <br></br>

            <Nav.Link className="src" href="/my">
              마이페이지
            </Nav.Link>
            <br></br>
          </Nav>
        </div>
        <div className="b2">
          <ImageSlider />
        </div>
        <div className="b3">
          <Playground/>
        </div>
      </div>
    </>
  );
}

export default Main;
