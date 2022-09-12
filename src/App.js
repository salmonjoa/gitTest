import './App.css'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './page/Detail'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import Mypage from './page/Mypage'
import Mylike from './page/Mylike'
import EditInfo from './page/EditInfo'
import List from './page/List'
import Main from './Main/Main'
import Square from './Square/Square'
import Header from './layouts/Header'
import axios from 'axios';

function App() {
let dispatch = useDispatch();

  // axios로 데이터 가져오기
  let [realData, setRealData] = useState([]);
    useEffect(()=>{
      // axios.get("http://192.168.0.23:8080/api/dish/get") 더미데이터주의
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
        // console.log(response.data)
        setRealData(response.data)
      })
      .catch(()=>{
        console.log('실패')
      })
    },[])
    console.log(realData)
    // console.log(JSON.stringify(realData));

  let navigate = useNavigate();
  
  return (
    <div>
    <div className='login'>
        <Header />
      </div>
      <div className='app'>
      <h1 className='name' onClick={() => {navigate('/')}}>Recipe(가제)</h1>
        <Navbar>
          <Container>

            <div className='menubar'>
              <Nav>
                <Nav.Link className='var' onClick={() => {navigate('/')}}><strong>Home🏠</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/detail')}}><strong>레시피🍴</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/card')}}><strong>광장🍀</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/rank')}}><strong>랭킹🏆</strong></Nav.Link>
                <Nav.Link className='var' onClick={() => {navigate('/mypage')}}><strong>마이페이지👤</strong></Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
      </div>
          <Routes>
            <Route path="/" element={ <Main realData={realData} />}/>
            <Route path="/detail" element={<List realData={realData} />}/>
            <Route path="/card" element={<Square/>}/>
            <Route path="/detail/:id" element={ <Detail realData={realData} />}/>
            <Route path="/mypage/*" element={<Mypage realData={realData} />}/>
            <Route path="/mylike" element={<Mylike realData={realData} />}/>
            <Route path="/editinfo" element={<EditInfo realData={realData} />}/>
          </Routes>
    </div>
  );
}

export default App;

  //데이터 store에 보관 후 가져오기
  // useEffect(()=>(
  //   async () => {
  //     try {
  //       const temp = await axios.get("http://192.168.0.23:8080/api/dish/get",{
  //         headers:{
  //           'Content-type': 'application/json'
  //         }
  //       })
  //       dispatch(dish(temp.data))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // ),[])
  // let realData = useSelector((state) => state.allData );
