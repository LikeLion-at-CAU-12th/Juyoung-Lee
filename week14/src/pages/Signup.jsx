import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUp } from '../apis/user';

export const Signup = () => {
  //받아야할 값 변수 네개 작성
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();

  //데이터를 넘기기 위한 저장하는 onChange함수
  const onChangeID = (e) => {
    setId(e.target.value);
  }
  const onChangePw = (e) => {
    setPw(e.target.value);
  }
  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeAge = (e) => {
    setAge(e.target.value);
  }
  
  const router = useNavigate();

  //회원가입 연결할 이동함수
  const onClick = async () => {
    await signUp(id,pw,name,age);
    router("/");
  }

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <div>아이디</div>
        <input value={id} onChange={onChangeID}/>
        <div>비밀번호</div>
        <input value={pw} onChange={onChangePw}/>
        <div>이름</div>
        <input value={name} onChange={onChangeName}/>
        <div>나이</div>
        <input value={age} onChange={onChangeAge}/>
      </Inputs>
      <button onClick={onClick}>가입하기</button>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  div {
    font-size: 14px;
    color: grey;
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;
