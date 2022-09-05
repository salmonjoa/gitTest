// 레시피 목록

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Posts = ({ posts, loading, setPosts }) => {

  let navigate = useNavigate();

  const [valueState, setValueState] = useState('');
  const onChangeHandler = (event) => {
    const value = event.target.value
    setValueState(value)
  }

  const [inputState, setInputState] = useState('');
  const handleInput = (event) => {
    const input = event.target.value
    setInputState(input)
    const filtered = posts.filter((itemList) => {
      // if(valueState === '1')
      //   return itemList.title.toUpperCase().includes(input.toUpperCase());
      // else if(valueState === '2')
      //   return itemList.title.toUpperCase().includes(input.toUpperCase())
      //       || itemList.title.toUpperCase().includes(input.toUpperCase());
      // else
        return itemList.title.toUpperCase().includes(input.toUpperCase());
    });
    if (input === '') {
      setPosts(posts)
    } else {
      setPosts(filtered);
    }
  }

  return (
    <>
    <div className='write'>
      <select defaultValue='0' className='select' onChange={onChangeHandler}>
        <option value='0'>글제목</option>
        <option value='1'>작성자</option>
        <option value='2'>제목+작성자</option>
      </select>

      <input type='text' className='searchI' onChange={handleInput} placeholder='Search'></input>
      <span className='blind'>-</span>
      <button className='searchB' onClick={()=>{
        inputState === '' ? alert('검색어를 입력해주세요.') : console.log(inputState)
      }}>검색</button>
      </div><br/>

      {loading && <div className="nameD"><h3> Loading... </h3></div>}
        {posts.map((post) => (
          <h3 className='list' key={post.id} 
          onClick={()=>{
          navigate('/detail/'+ post.id)
          }}>{post.id}. {post.title} </h3>
        ))}
    </>
  );
};

export default Posts;