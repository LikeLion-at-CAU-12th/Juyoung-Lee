import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';




export const BookDetail = () => {
    //useparams이용해서 객체형식으로 가져올수
    const params= useParams();
    const id = params.id;
    const [books, setBooks] = useState([]);
    const [likes, setlikes] = useState(0);

    const updateLikes = ()=> {
        setlikes(likes +1);
    }

    useEffect(()=>{
        const fetchBooks = async() => {
            const response = await axios.get('/databases/books.json');
            setBooks(response.data);
        }
        fetchBooks();
        //여기까지 첫 ,,화면에 보일것.(타이틀이 뜨는것)
        //일치하는 북까지 가져왓는데 왜 안대?useEffect의 특성..
        //???if로 처리한다.
        //첫 마운트 후 ,, 데이터패칭 한거 
        //좋아요는 

    }, []
);
    useEffect(()=>{
        setlikes(0);

    },[id]); //의존성배열[]에 id값에 따랍 변함<div className=""></div>
    const book = books.find((b)=> b.id===parseInt(id)); //지금 순회하는 id는 숫자, param은 문자열로 ,,바궈줘야 

    //console.log(id); //숫자로 썻지만 스트링타입으로 나옴 .. 그래서 위랑 같지않다고 나온다.
    //console.log(book);
    if(!book) {
        return <div>찾는 책이 없습니다.</div>;
    }

  return ( <div>
    <h1>{book.title}</h1>
    <h3>{book.author}</h3>
    <p>{book.description}</p>
    <Button onClick={updateLikes}>
        <Icon>❤️‍🔥</Icon> {likes}
    </Button>
  </div>
  )
} 
//버튼 옆에 likes라는거 올라가게..
//페이지 이동시 리렌더링이 되지않아 ,,하트수가 다른곳에도 뜬다..!
//if조건 어쩌고로 해보자..!


const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
