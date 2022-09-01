import UserList from "./userlist";
import Board from "./board";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Admin_Layout = () => {
  return (
    <>
      <Container>
        <Link to="/userlist">
          <Button variant="outline-dark">유저 관리</Button>
        </Link>
        <Link to="/board">
          <Button variant="outline-dark">게시판</Button>
        </Link>
        <Routes>
          <Route exact path="/userlist" element={UserList()} />
        </Routes>
        <Routes>
          <Route exact path="/board" element={Board()} />
        </Routes>
      </Container>
    </>
  );
};
export default Admin_Layout;
