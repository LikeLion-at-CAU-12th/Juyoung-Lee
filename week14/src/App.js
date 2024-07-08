import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Mypage } from './pages/Mypage';
import { Signup } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/mypage" element={<Mypage />}> </Route>
        <Route path="/signup" element={<Signup />}> </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
