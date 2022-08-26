import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {cLike} from './../store/store';
import Nav from 'react-bootstrap/Nav';
import {useState, useEffect} from 'react';

function Detail(props) {
  // let item = props.recipe.find(function(item){
  //   return item.id == id
  // });

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [댓글, set댓글] = useState('댓글입니다.');
  let [레시피, set레시피] = useState('레시피입니다.');
  let [영상, set영상] = useState('url입니다.');
  let [tab, setTab] = useState(0);
  let recipedata = useSelector((state)=>state.tmpdata);

  let {id} = useParams();
  let infodata = recipedata.find(function(info){
    return info.id == id 
  })

  return (
    <>
      <button className='back' onClick={()=>{navigate("/detail")}}>목록보기</button>
      <div className="container">
          <div className='all'>
            <h1 className='nameD'>{infodata.title}</h1>
            <div className='right'>
              <div>작성자: {infodata.writer}</div>
              <div>작성일: {infodata.date}</div>
            </div>
            <div className='middle'>
              <img src='./../image/신라면.jpg' width="100%" /><br/>
            <div className='small'>
              <span onClick={()=>{
              dispatch(cLike())
              }}> ❤️{infodata.dish_like}</span>
              <span className='small'> 😋{infodata.ate}</span>
            </div><br/>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link eventKey="link0" onClick={()=>{
                setTab(0)
                }}>레시피</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={()=>{
                  setTab(1)
                }}>댓글</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={()=>{
                  setTab(2)
                }}>영상보기</Nav.Link>
              </Nav.Item>
            </Nav>
          <TabCom 댓글={댓글} 레시피={레시피} 영상={영상} tab={tab}/>
          </div>
      </div>
      </>
  );
}

function TabCom(props){
  return(
    [<div>{props.레시피}</div>, <div>{props.댓글}</div>, <div>{props.영상}</div>][props.tab]
    );
}
export default Detail;