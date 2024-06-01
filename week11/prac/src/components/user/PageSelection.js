import React from 'react';
import styled from 'styled-components';
import { getPerPage } from '../../apis/userlist';


const PageSelection = ({curPage, setUserData, setCurPage}) => {
    const handleClick = async(page) => {
        const response = await getPerPage(page);
        setUserData(response);
        setCurPage(page);//페이지 그대로 전달
    }
    
    return (
        <SelectionLayout>{[1,2,3,4,5,6].map(
            (val)=>
            <PageBox key={val} $active={val === curPage ? true : false} onClick={() => handleClick(val)}>
                {val}
            </PageBox>
        )}</SelectionLayout>
    )
}

export default PageSelection;

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`
