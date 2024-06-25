import React from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import ChoiceBox from '../apis/ChoiceBox';
import SubmitButton from '../apis/SubmitButton';

const LionQ = () => {
  const { Qlist, selAns, handleSelAns } = useOutletContext(); //LionTest.jsx에서 보낸 데이터 받기
  console.log('Qlist:', Qlist);
  console.log('selAns:', selAns);
  console.log('handleSelAns:', handleSelAns); //지금 현재 이 데이터가 안받아와지는듯

  return (
    <div>
      <LionQDom>
        {Qlist.map((question) => (
          <div key={question.id}>
            <SemiTitle>{question.question}</SemiTitle>
            <ChoiceBoxes>
              {question.choices.map((choice, idx) => (
                <ChoiceBox
                  key={idx}
                  content={choice}
                  $active={selAns[question.id] === idx}
                  onClick={() => handleSelAns(question.id, idx)}
                />
              ))}
            </ChoiceBoxes>
          </div>
        ))}
        <SubmitButton selAns={selAns} to="/liontest/result" />
      </LionQDom>
    </div>
  );
};

export default LionQ;

const LionQDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  
`;
const ChoiceBoxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const SemiTitle = styled.div`
  background-color: #9fe5ff;
  font-size: 20px;
  color: #535353;
  font-weight: 700;
  margin: 20px;
`;
