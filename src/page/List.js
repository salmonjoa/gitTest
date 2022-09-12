import './../App.css';
import { useEffect, useState } from "react";
import Pagination from './../Paging';
import Posts from './Post';

function List({realData}){

  // ** 페이지네이션 **
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(5);


  // indexOf로 각 페이지의 첫번째와 마지막 인덱스 번호 구하기
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (realData) => {
    const currentPosts = 0;
    // slice로 시작번째 ~ 끝-1번째까지를 복사본으로 반환
    currentPosts = realData.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div>
      <Posts realData={realData} currentPosts={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={realData.length}
        paginate={setCurrentPage}
      ></Pagination>

    </div>
  )
}

export default List;