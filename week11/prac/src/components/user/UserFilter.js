import React from 'react';
import styled from 'styled-components'
import { filterType } from '../../constants/filterType';
import { getGenderUser, getPartUser, getPerPage } from '../../apis/userlist';

const UserFilter = ({setFilter, setUserData, setCurPage, filter}) => {
    
    const handleClick = async(type, param) => {
        if(type === "all"){
            const response = await getPerPage(1); //전체 선택시 page0데이터 불러오기
            //response값을 저장하기위해 새로운상태(state)가 필요하다.
            //useState를 이용해서 가져오자.
            setUserData(response); //response값 저장
            //console.log(response);
            setCurPage(); //현재 페이지 1로 초기화.
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response); 
            //console.log(response);
            setCurPage(1);
        } else if (type === "part") {
            const response = await getPartUser(param);
            setUserData(response); //response값 저장
            //console.log(response);
            setCurPage(1);
        } //각 전체, 성별, 파트 별로 필요한 api를 호출해서 응답을 저장한다.
        setFilter(param);//다른값으로 변경가능(색상변경시 이용해봐)
    }


    return (
        <FilterLayout>{filterType.map(
            (data, idx) =>
            <FilterBox key={idx} $active={data.param === filter ? true : false} onClick={() =>handleClick(data.type, data.param)}>{data.title}</FilterBox>
            )}</FilterLayout>
    );
};

export default UserFilter;

const FilterLayout = styled.div`
    display: flex;
    width : 90%;
    justify-content: space-between;
    overflow-x : scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap : 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div `
    display: flex;
    padding : 1rem 4rem 1rem 4rem;
    color: "white";
    background-color: ${(props) => props.$active ? "white" : "#C9C9C9"};
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    &:hover{
        cursor: pointer;
        color: "white";
    }
    


`