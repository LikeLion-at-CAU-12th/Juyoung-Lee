import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Button } from './common';
import { ThemeColorContext } from '../../context/context';
import { emailAtom, isSubmitedAtom, telAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';


const Layout = ({children}) => {
    const context = useContext(ThemeColorContext); //상태 가져오기위해.. 지금은 초기값 들어가잇음
    const [mode, setMode] = useState(context.greenTheme); //context객체를 가져오ㅏ서 그 안에 blu쓴거임
    //지정아톰들 가져오기(푸터수정위해)
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmitedAtom);
    const tel = useRecoilValue(telAtom);

    const handleMode = (e) => {
        const value = e.target.value;
        if(value === 'blue'){
            setMode(context.blueTheme);
        } else if (value === 'green') {
            setMode(context.greenTheme);
        } else {
            setMode(context.pinkTheme);
        }

    } //색상 클릭 시 버튼값 변경되는
    return (
        <ThemeColorContext.Provider value={mode}>
        <Wrapper>
            <Header mode={mode.main}>
                <Button value={'blue'} onClick={handleMode}>blue🌊</Button>
                <Button value={'green'} onClick={handleMode}>green🌿</Button>
                <Button value={'pink'} onClick={handleMode}>pink🩷</Button>
            </Header>
             <div>{children}</div>
        <Footer mode={mode.main}>
            {isSubmited ? `🎧${userName}의 공간 | ${email} | ${tel} 🎧` : `🦁2024 LikeLion FE🦁`}
        </Footer>
        </Wrapper>
        </ThemeColorContext.Provider>
    );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;