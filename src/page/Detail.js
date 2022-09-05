import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Detail() {

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [댓글, set댓글] = useState('댓글입니다.');
  let [레시피, set레시피] = useState('레시피입니다.');
  let [영상, set영상] = useState('url입니다.');
  let [tab, setTab] = useState(0);
  let [like, setLike] = useState(false);

  // 데이터 - 한번에 여러 개 가져오기
  let [test, setTest] = useState([]);
  let [loading, setLoading] = useState(false);

  //테스트 데이터 경로 두 개
  useEffect(() => {
    const testing = async () => {
    setLoading(true);
    axios.all(
      [axios.get('https://jsonplaceholder.typicode.com/posts')
      , axios.get('https://jsonplaceholder.typicode.com/photos')])
        .then(axios.spread((result1, result2)=>{
          const conn = [...result1.data, ...result2.data];
          setTest(conn);
          setLoading(false);
        })
      )
    .catch((err) => {console.log(err)});
    };
    testing();
  },[]);

  // 진짜 데이터 경로 하나
  // useEffect(()=>(
  //   temp
  // ),[])

  //   const temp = async () => {
  //     try {
  //       const temp = await axios.get("http://192.168.0.23:8080/api/ate/get",{
  //         headers:{
  //           'Content-type': 'application/json'
  //         }
  //       })
  //       setTest(temp.data)
  //       console.log(test)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  // 주소 파라미터
  let {id} = useParams();
  let testdata = test.find((info)=>{
    return info.id == id
  })
  console.log(testdata)

  return (
    <>
    <Button className='back' variant="light" onClick={()=>{navigate(-1)}}>{'<<'} 목록보기</Button>
      <div className="container">
          <div className='all'>
            {/* <h1 className='nameD'>{testdata.title}</h1> */}
              {/* <div className='detailR'>작성자: {testdata.userId}</div> */}
              {/* <div className='detailR'>작성일: {infodata.date}</div> */}
            <div className='middle'>
              <img src='./../image/신라면.jpg' width="100%" /><br/>
            <div className='small'>

              <span onClick={(e)=>{
                e.stopPropagation()
                setLike(!like)
                console.log(like)
              }}>
                  {
                    like === true ? '❤️' : '🤍'
                  }
                  {/* {
                    like === true ?
                    infodata.dish_like +1
                    : infodata.dish_like
                  } */}
                </span>
              <span className='small'> 😋{/*infodata.ate*/}</span>
            </div><br/>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
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