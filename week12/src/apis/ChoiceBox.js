import React from 'react'
import styled from 'styled-components'

const ChoiceBox = ({content ,$active, onClick })=> {
    return (
        <StyledChoiceBox $active={$active} onClick={onClick}>
            {content}
        </StyledChoiceBox>
    );
};

export default ChoiceBox;

const StyledChoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 13px;
  color: #4a4a4a;
  background-color: ${(props) => props.$active ? "rgba(255,179,122,1)" : "#C9C9C9"};
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 5px;
`;