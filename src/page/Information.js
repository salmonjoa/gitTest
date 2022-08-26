import {Button} from 'react-bootstrap'

function Information(){
  return(
    <div className='comm'>
          <h2><strong>내정보관리</strong></h2><br/>
          <hr/><br/><br/><br/><br/>
          회원님의 개인정보 보호를 위한 확인 절차를 위해 비밀번호를 입력해주세요.<br/><br/>
          <input type="text" className='inputpw' placeholder='비밀번호' />
          <br/><br/><br/><br/><hr/>
          <br/><br/>
          <div className='blind'>
            <Button className='cnxl' variant="dark">취소</Button>
            {'-----'}
            <Button className='ok' variant="dark">확인</Button>
          </div>
        </div>
  );
}

export default Information;