//form에서 만든걸 사용하는 파일을 만들엇음
//Form컴포넌트 불러올때 경로 확인 잘하기(import 해온 경로 확인)

import React, { useContext, useState } from 'react';
import { Button, Wrapper } from '../layout/common';
import Form from './Form';
import { ThemeColorContext } from '../../context/context';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { emailAtom, isConfirmedAtom, isSubmitedAtom, telAtom, userNameAtom } from '../../recoil/atom';
import Modal from '../Modal/Modal';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    //페이지이동
    const navigate = useNavigate();

    //버튼 누르면 제출이 1로 변하게set만필요
    //const setIsSubmited = useSetRecoilState(isSubmitedAtom);

    //모달관련
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmitedAtom);
    const tel = useRecoilValue(telAtom);
    const setIsSubmited = useSetRecoilState(isSubmitedAtom);

    //모달창
    const [modalOpen, setModalOpen] = useState(false);
    
    

    const handleBtn = ()=>{
        //navigate("/mypage"); //모달창으로 기능이동
        setIsSubmited(true);
        setModalOpen(true);
      
    }

    return (
        <Wrapper>
            <Form type='text' inputType={'이름'} />
            <Form type='email' inputType={'이메일'} />
            <Form type='tel' inputType={'전화번호'} />
            <Button mode={mode.button} onClick={handleBtn} >제출</Button>

            {modalOpen && (
                <Modal setModalOpen = {setModalOpen} />
            )}
        </Wrapper>
    );
};

export default FormSection;
