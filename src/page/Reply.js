function Reply({dishData}){
  return(
    <>
    <div className='comm'>
      <h2><strong>댓글관리</strong></h2><br/>
      <hr/>
      {dishData.map((a, i)=>{
        return <div>
          <div className="smallL">
            <img src={a.mainIMG} width='100%' />
          </div>
          <div className="smallR">
            <h4>{a.dish_name}</h4>
            댓글
            <br/>
            댓글작성일
          </div>
        <div className="blind">-</div>
        <hr/>
      </div>
      })}
    </div>
      </>
  );
}

export default Reply;