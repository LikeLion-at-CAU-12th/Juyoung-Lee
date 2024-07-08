import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoginAtom } from '../recoil/atom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';


const Home = () => {
  //로그인 상태에 따라 로그인, 로그아웃 버튼이 생기도록
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  //로그아웃 버튼 클릭 시 토큰 삭제 및 기존home으로 이동
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setIsLogin(false);
    navigate('/');
  };


  return (
    <MenuDom>
        <Title>Week12 session</Title>
        <StyledLink to="/books">
            📚Book List
        </StyledLink>
        <StyledLink to="/liontest">
            🦁멋사인 테스트
        </StyledLink>
        {isLogin ? (
        <StyledLink onClick={handleLogout}>🥲로그아웃🥲</StyledLink>
      ) : (
        <StyledLink to='/login'>🫥로그인🫥</StyledLink>
      )}
    </MenuDom>
  )
}

export default Home;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledLink = styled(Link)` //이미 만들어져있는 컴포넌트도 () 로 꾸밀수있음..
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
