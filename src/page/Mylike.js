import { useState } from 'react';
import { Card } from 'react-bootstrap';


function Mylike({dishData}){
  let [del, setDel] = useState(dishData)

  return (
    <>
      <div className='comm'>
        <h2><strong>좋아하는 레시피</strong></h2><br/>
        <hr/>
      {
        del.map((a,i)=>
          <div className='inlinePic'>
            <div className='delLike'>
              <button className='close' onClick={()=>{
              let copy = [...del];
              copy.splice(i, 1);
              setDel(copy);
              }}> ✖ </button></div>
              <img src={del[i].mainIMG} width="100%" /><br/><br/>
              <h4>{ del[i].dish_name }</h4>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Mylike;