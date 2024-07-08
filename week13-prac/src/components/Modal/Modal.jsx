import React, { useContext } from 'react';
import { emailAtom, isConfirmedAtom, isSubmitedAtom, telAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ThemeColorContext } from '../../context/context';
import styled from 'styled-components';

const Modal = ({setModalOpen}) => {
    const navigate= useNavigate();
    const mode = useContext(ThemeColorContext);
   
    //입력된 데이터값들 저장 후 띄워주기
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmitedAtom);
    const tel = useRecoilValue(telAtom);
    


    //확인버튼 클릭시 페이지 이동
    const okbtn= () => {
        alert(`Welcome🤘 ${userName}`)
        navigate('/mypage');
        setModalOpen(false);
    };


    //취소버튼 클릭시 화면 리셋
    const resetbtn = () => {
        setModalOpen(false);
    }



    return (
        <ModalWrapper>
            <h3>입력하신 정보가 맞습니까?</h3>
            <p>이름 : {userName}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel} </p>
            <button onClick={okbtn} mode={mode.button}>확인</button>
            <button onClick={resetbtn} mode={mode.button}>취소</button>
            
        </ModalWrapper>
    );
};

export default Modal;

const ModalWrapper = styled.div`
    display: block;
    height: 130%;
    width: 130%;
    justify-content: center;
    align-items: center;
    background-color: #d6d6d6;
    

    
`;