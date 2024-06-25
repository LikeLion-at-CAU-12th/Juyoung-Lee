import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

async function sandData(answers) {
    const response = await fetch(`https://gominzipsession.o-r.kr/liontest/result`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            answers
        }),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData.correctCount;
}


const SubmitButton = ({selAns}) => {
    const navigate =useNavigate();

    const handleClick = async() => {
        const submitChoices = [0,0,0,0,0];
        const keys = Object.keys(selAns);
        const numkeys= keys.length ;

        if (numkeys !==5) {
            alert("모든 질문에 답하시오.")
        } else {
            for(let i =1; i <6; i++) {
                submitChoices[i-1] = selAns[i] +1;
            }
            console.log(submitChoices);
            const num = await sandData(submitChoices);
            navigate(`/LionTest/LionResult/${num}`);
        }
    }



    return (
        <StyledButton onClick = {handleClick} >
            나는 무슨 사자?
        </StyledButton>
    );
};

export default SubmitButton;

const StyledButton = styled.button`
    display:flex;
    flex-direction:column;
    background-color: #b8edfb;
    border-radius: 20px;
    border:none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 0px;
    padding:10px;
    width: 100px;
    cursor: pointer;
    `;