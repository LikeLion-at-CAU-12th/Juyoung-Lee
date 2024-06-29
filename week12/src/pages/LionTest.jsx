import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import LionQ from './LionQ';


const LionTest = () => {
    const [Qlist, setQlist] = useState([]); //질문리스트
    const [selAns, setSelAns] = useState([]); //선택값 받아오기
    const baseURL = "https://gominzipsession.o-r.kr" //반복되는 베이스URL 변수로 
    
    useEffect(()=>{
        const fetchQlist = async() => {
            const response = await axios.get(`${baseURL}/liontest/question`);
            //console.log(response.data.questions); //받아와지는지 확인

            setQlist(response.data.questions); //set에 받아온 데이터 저장하기
        };
        fetchQlist(); //여기까지 첫 ,,화면에 보일것.(타이틀이 뜨는것)
    }, [] );//두번째 인자가 빈배열일때, 처음에만 ...

    const handleSelAns = (questionId, choiceIdx) => {
     setSelAns(selAns => ({
         ...selAns, [questionId]: choiceIdx
     }));
        console.log(selAns);
    }

    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    } //홈버튼 클릭시 Home.jsx페이지로 돌아감.


    return (
        <MenuDom>
            <LionTestDom>
                <Title onClick={goToHome}>🏠</Title>
                <Title>멋사인 테스트</Title>
                
            </LionTestDom>
            
            <LionQDom>
             <LionQ Qlist={Qlist} selAns={selAns} handleSelAns={handleSelAns} />
            </LionQDom>
            
    </MenuDom>
    );
};

export default LionTest;

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const LionTestDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

`;

const LionQDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  width: 70%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  
`;

