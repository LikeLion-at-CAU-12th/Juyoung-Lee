import styled from "styled-components";
import Home from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Route, Routes } from "react-router-dom";
import { BookDetail } from "./pages/BookDetail";


function App() {

  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookDetail/>} />

        </Route>
      </Routes>
    </AppDom>
  );
}

export default App;

//:id만 해도 부모태그에 경로에 붙여져서 한번에 적용됨.

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;