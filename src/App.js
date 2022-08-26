import './App.css'
import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './page/Detail'
import {useState} from 'react'
import {cLike} from './store/store'
import { useDispatch, useSelector } from 'react-redux'
import Mypage from './page/Mypage'
import Mylike from './page/Mylike'
import Information from './page/Information'


function App() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let recipedata = useSelector((state)=>state.tmpdata);
  let [like, setLike] = useState(false);

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
            <Route path="/detail" element={
              <div>
                <div className='write'>
                  <input type='text' className='searchI' ></input>
                  <span className='blind'>-</span>
                  <button className='searchB'>검색</button>
                </div>
                {
                recipedata.map((a, i)=> 
                    <div className='list' key={i}>
                      <h3 className='title' onClick={()=>{
                        navigate('/detail/'+ a.id)
                      }}>
                        <div className='titleD'>{i+1}. {recipedata[i].title}</div>
                        <small onClick={(e)=>{
                          e.stopPropagation();
                          setLike(!like)
                        }}> 
                        <span>{
                          like == true ? '❤️' : '🤍'
                        }</span> 
                        {recipedata[i].dish_like}</small>
                        <small> 😋{recipedata[i].ate}</small>
                      </h3>
                      <p className='date'>{recipedata[i].date}</p>
                    </div>
                  )
                }
              </div>
              }/>
            <Route path="/detail/:id" element={ <Detail/>}/>
            <Route path="/mypage/*" element={<Mypage/>}/>
            <Route path="/mylike" element={<Mylike/>}/>
          </Routes>
      
    </div>
  );
}

export default App;
