//main
import React, { useState } from 'react';
import styled from 'styled-components'
import UserSection from '../components/user/UserSection';
import UserFilter from '../components/user/UserFilter';
import PageSelection from '../components/user/PageSelection';

const UserInfo = () => {
    const [userData, setUserData] = useState([]);
    const [curPage, setCurPage] = useState(); // 초기값을 설정하지 않아서 initial value === undefined가 되고 이후 이용함
    const [filter, setFilter] = useState("all") // 추후 색상 과제시 이용하기

    return (
        <MainLayout>
        <h1>👻12기 아기사자 리스트🎨</h1>
        <ContentBox>
            <UserFilter 
            setFilter={setFilter}
            setUserData={setUserData}
            setCurPage={setCurPage} />
            <UserSection userData={userData} />
            {filter === "all" && <PageSelection 
            curPage={curPage}
            setUserData={setUserData}
            setCurPage={setCurPage} />}
        </ContentBox>
    </MainLayout>
    );
};

export default UserInfo;

const MainLayout = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;

    }
`

const ContentBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border: 5px solid #ff7710;
`