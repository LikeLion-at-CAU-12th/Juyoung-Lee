import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmitedAtom, telAtom, userNameAtom } from '../recoil/atom'
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export const MyPage = () => {
    //이름 가져오기
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const navigate =useNavigate();

    const resetUsername = useResetRecoilState(userNameAtom); //유저네임아톰값 리셋시키는 
    const resetEmail = useResetRecoilState(emailAtom);
    const reset = useResetRecoilState(isSubmitedAtom);
    const resetTel = useResetRecoilState(telAtom); //입력받은 전화번호 리셋시키기

    const handleReset = () => {
        reset();
        resetEmail();
        resetUsername();
        resetTel();

        navigate('/');
    }
  return (
    <Wrapper>
        <Title> Welcome {userName}🤘</Title>
        <Button mode={mode.button} onClick={handleReset}>리셋</Button>
    </Wrapper>
  )
}


//사용자이름 받아와서 웰컴