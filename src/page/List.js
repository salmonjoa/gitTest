// 페이지only

import './../App.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
// import {paginate}  from 'react-js-pagination';
import axios from 'axios';
import Pagination from './../Paging'
import Posts from './Post';

function List(){

  // ** 페이지네이션 **
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(10);

  // 데이터
  useEffect(() => {
    const testing = async () => {
    setLoading(true);
    axios.all(
      [axios.get('http://192.168.0.23:8080/api/dish/get')
      , axios.get('http://192.168.0.10:8080/api/admin/admin-list')])
        .then(axios.spread((result1, result2)=>{
          const conn = [...result1.data, ...result2.data];
          setPosts(conn);
          setLoading(false);
        })
    )
    .catch((err) => {console.log(err)});
    };
    testing();
  },[]);

  console.log(posts)

  // indecOf로 각 페이지의 첫번째와 마지막 인덱스 번호 구하기
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    // slice로 시작번째 ~ 끝-1번째까지를 복사본으로 반환
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div>
      <Posts posts={currentPosts(posts)} setPosts={setPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination>
    </div>
  )
}

export default List;

// function List (){
//   let recipedata = useSelector((state)=>state.tmpdata);
//  
//   let [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [valueState, setValueState] = useState('');
//   const onChangeHandler = (event) => {
//     const value = event.target.value
//     setValueState(value)
//   }



  // function handleInput(event) {
  //   const input = event.target.value;
  //   const mydata = filteredData.filter((recipe) => {
  //     if(valueState === '1')
  //       return recipe.writer.toLowerCase().includes(input.toLowerCase());
  //     else if(valueState === '2')
  //       return recipe.date.toLowerCase().includes(input.toLowerCase());
  //     else
  //       return recipe.title.toLowerCase().includes(input.toLowerCase());
  //     });
  //   if (input === '') {
  //     setFilteredData(filteredData)
  //     console.log(filteredData)
  //   } else {
  //     setFilteredData(mydata);
  //   }
  // }


//   return(
//     <div className='detailList'>
//       <div className='write'>
//       <select defaultValue='0' className='select' onChange={onChangeHandler}>
//         <option value='0'>글제목</option>
//         <option value='1'>작성자</option>
//         <option value='2'>작성일</option>
//       </select>
//         <input type='text' className='searchI' onChange={handleInput} placeholder='Search'></input>
//         <span className='blind'>-</span>
//         <button className='searchB'>검색</button>
//       </div><br/>

//       {/* 레시피목록 검색 */}
//       <div className="results">
//         {filteredData.length > 0 && (
//           <TreeView multiselect>
//             {filteredData.slice(0, 10).map((a, i) => {
//               return (
//                 <TreeItem
//                   // nodeId={}
//                   label={
//                   <div className='list' key={i}>
//                     <h3 className='title' onClick={()=>{
//                       navigate('/detail/'+ a.id)
//                       }}>
//                       <div className='titleD'>{i+1}. {filteredData[i].title}</div>
//                       <small> ❤️{filteredData[i].dish_like}</small>
//                       <small> 😋{filteredData[i].ate}</small>
//                     </h3>
//                     <p className='date'>{filteredData[i].userId} | {filteredData[i].date}</p>
//                   </div>
//                 }
//                 />
//               );
//             })}
//           </TreeView>
//         )}
//       </div>

     
//         {/*
//         recipedata.map((a, i)=> 
//             <div className='list' key={i}>
//               <h3 className='title' onClick={()=>{
//                 navigate('/detail/'+ a.id)
//               }}>
//                 <div className='titleD'>{i+1}. {recipedata[i].title}</div>
//                 <small onClick={(e)=>{
//                   e.stopPropagation();
//                   setLike(!like)
//                 }}> 
//                 <span>{
//                   like == true ? '❤️' : '🤍'
//                 }</span> 
//                 {recipedata[i].dish_like}</small>
//                 <small> 😋{recipedata[i].ate}</small>
//               </h3>
//               <p className='date'>{recipedata[i].date}</p>
//             </div>
//           )
//         }*/}

//     </div>
//   )
// }



