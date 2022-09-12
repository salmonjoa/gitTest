import {ListGroup, Col, Nav} from 'react-bootstrap'
import Information from './Information'
import Reply from './Reply'
import Mylike from './Mylike'
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Myate from './Myate'
import {useState, useEffect} from 'react';
import axios from 'axios';

let Mypage = () => {
  let navigate = useNavigate();
  // axios
  let [data, setData] = useState([]);

  // const dishData = useSelector((state) => state.allData );
  useEffect(()=>{
    axios.get("http://192.168.0.23:8080/api/dish/get")
    .then((response)=>{
      // console.log(response.data)
      setData(response.data)
    })
    .catch(()=>{
      console.log('실패')
    })
},[])
  console.log(data)

  return(
    <div>
      <div className='floatL'>
        <div className='info'><strong> My Page </strong></div>
        <ListGroup>
          <Col>
            <Nav className="flex-column">
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/myinfo')}}><strong className='black'>내정보관리</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/mylike')}}><strong className='black'>좋아요❤️</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/myate')}}><strong className='black'>먹어봄😋</strong></Nav.Link></ListGroup.Item>
              <ListGroup.Item><Nav.Link onClick={() => {navigate('/mypage/reply')}}><strong className='black'>댓글관리📝</strong></Nav.Link></ListGroup.Item>
            </Nav>
          </Col>
        </ListGroup>
      </div>

    <Routes>
      <Route path="/" element={<div className='floatR'>
        
      <div className='comm'>
      <h2><strong>마이페이지</strong></h2><hr/><br/>
      <div className="gather">
        <div className="gatherL"><strong>{'user'}</strong> 님</div>
        <div className="gatherR">
          <div className="triple">
            <p className="up">좋아요</p>
            <p className="under" onClick={() => {navigate('/mypage/mylike')}}><strong>{'.length'}</strong></p>
          </div>
          <div className="triple">
            <p className="up">먹어봄</p>
            <p className="under" onClick={() => {navigate('/mypage/myate')}}><strong>{'.length'}</strong></p>
          </div>
          <div className="triple">
            <p className="up">댓글수</p>
            <p className="under" onClick={() => {navigate('/mypage/reply')}}><strong>{'.length'}</strong></p>
          </div>
        </div>
      </div>
    </div>

        </div>}/>
      <Route path="myinfo" element={<div className='floatR'><Information data={data} /></div>}/>
      <Route path="mylike" element={<div className='floatR'><Mylike data={data} /></div>}/>
      <Route path="myate" element={<div className='floatR'><Myate data={data} /></div>}/>
      <Route path="reply" element={<div className='floatR'><Reply data={data} /></div>}/>
    </Routes>
    </div>
  );
}

export default Mypage;