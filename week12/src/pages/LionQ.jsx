import React from 'react';
import styled from 'styled-components';
import {useOutletContext} from 'react-router-dom';
import ChoiceBox from '../apis/ChoiceBox';
import SubmitButton from '../apis/SubmitButton';




const LionQ = () => {
    const {Qlist, selAns, handleselAns} = useOutletContext(); //LionTest.jsx에서 보낸 데이터 받기
    

    return (
        <div>
            <LionQDom>
                {Qlist.map((test)=>(
                <div key = {test.id}>
                <SemiTitle>{test.question}</SemiTitle>
                <ChoiceBoxes>
                    {test.choices.map((choice, idx)=>(
                 <ChoiceBox key = {idx} content = {choice}
                    $active = {selAns[test.id] === idx}
                    onClick = {() => handleselAns(test.id, idx)}>
                    </ChoiceBox>
                 ))}
                </ChoiceBoxes>
                </div>
                 ))}
            <SubmitButton selAns={selAns} to = {"/LionTest"} >
            </SubmitButton>
            </LionQDom>
        
        </div>
        
    );
};

export default LionQ;

const LionQDom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: gray;

    `


const ChoiceBoxes = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;


const SemiTitle = styled.div`
    background-color: yellow;
    font-size:20px;
    color: #535353;
    font-weight:700;
    margin: 20px;
`