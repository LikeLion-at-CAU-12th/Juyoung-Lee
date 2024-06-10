import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';




    //의존성배열


//첫함수는 첫실행될함수 ,,패칭함수

export const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }


    useEffect(()=>{
        const fetchBooks = async() => {
            const response = await axios.get('/databases/books.json');
            setBooks(response.data);
        }
        fetchBooks();
        //여기까지 첫 ,,화면에 보일것.(타이틀이 뜨는것)

    }, []
)

  return (
    <MenuDom>
        <BookListDom>
        <Title onClick={goToHome}>🏠</Title>
        <Title>📚Book List📚</Title>
        <ul>
            {books.map((book, idx)=>(
                <Link key={idx} to={`/books/${book.id}`}>
                    <li>{book.title}</li>
                </Link>   
            ))}
        </ul>
        </BookListDom>
        <BookDetailDom>
            <Outlet/> 
        </BookDetailDom>
    </MenuDom>
  )
}

//타이틀 누르면 링크로 넘어가게 
//key값 하면 .. 순회하는 객체에 id값 각각 가져서 원인어쩌공 ...!?
///outlet으로 부모컴에 자식컴 보일 위치를 지정

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;