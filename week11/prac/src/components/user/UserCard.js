import React from 'react';
import styled from 'styled-components';

const UserCard = ({data}) => {
    return (
        <UserCardLayout>
            <div className='name'>{
                `${data.name}(${data.gender === "male" ? "남" : "여"})`
            }
            </div>
            <div className='part'>{data.part}</div>
            <div className='major'>{data.major}</div>
        </UserCardLayout>
    );
};

export default UserCard;

const UserCardLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    background-color: rgba(255,179,122,1);
    border-radius: 1rem;
    padding-left: 2rem;
    & > .name{
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    & > .part{
        font-size: 1.8rem;
        margin-bottom: 0.6rem;
    }
    & > .major{
        font-size: 1.3rem;
    }
`