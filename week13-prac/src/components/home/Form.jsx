import React from 'react';
import { emailAtom, telAtom, userNameAtom } from '../../recoil/atom';
import {useRecoilState} from "recoil";

const Form = ({type, inputType}) => {
    //입력받은 값을 atom에 저장
    const [userName, setUserName] =useRecoilState(userNameAtom);
    const [email, setEmail] =useRecoilState(emailAtom);
    const [tel, setTel] =useRecoilState(telAtom);

    const onChange = (e) =>{
        const value = e.target.value; //입력된값이 벨류에 저장이됨
        //이름?이메일 무슨걸 입력받은건지 판단 후 set에 저장해ㅑㅇ지
        if(inputType === '이름') {
            setUserName(value);
        } else if( inputType === '이메일') {
            setEmail(value);
        } else {
            setTel(value);
        }

        
    }

    return (
        <>
        <div>{inputType}</div>
        <input type={type} onChange={onChange}/>
        </>
    );
};

export default Form;

//재사용할수있는 폼 만들기 ->프롬스로 받아서 재사용