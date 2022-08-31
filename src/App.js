import './App.css'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './page/Detail'
import { useDispatch, useSelector } from 'react-redux'
import Mypage from './page/Mypage'
import Mylike from './page/Mylike'
import EditInfo from './page/EditInfo';
import List from './page/List'

function App() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let recipedata = useSelector((state)=>state.tmpdata);
  
  return (
    <div>
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
            <Route path="/" element={ <div className="main-bg"></div> }/>
            <Route path="/detail" element={<List/>}/>
            <Route path="/detail/:id" element={ <Detail/>}/>
            <Route path="/mypage/*" element={<Mypage/>}/>
            <Route path="/mylike" element={<Mylike/>}/>
            <Route path="/editinfo" element={<EditInfo/>}/>
          </Routes>
    </div>
  );
}


export default App;