import React from 'react';
import styled from 'styled-components';
import { getPerPage } from '../../apis/userlist';


const PageSelection = ({curPage, setUserData, setCurPage}) => {
    const handleClick = async(page) => {
        const response = await getPerPage();
        const offset = 5;
        
        if (page=== 1){
            
            setUserData(response.slice(0, offset)); 
            setCurPage(1);
        } else if (page ===2){
            setUserData(response.slice(5, 10)); 
            setCurPage(2);
        } else if (page ===3){
            setUserData(response.slice(10, 15)); 
            setCurPage(3);
        } else if (page ===4){
            setUserData(response.slice(15, 20)); 
            setCurPage(4);
        } else if (page ===5){
            setUserData(response.slice(20, 25)); 
            setCurPage(5);
        } else {
            setUserData(response.slice(25, 30));
            setCurPage(6);
        }


        //setUserData(response.slice(0, offset)); //response값 저장.
        //console.log(response);
        //setCurPage(page);//페이지 그대로 전달
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
