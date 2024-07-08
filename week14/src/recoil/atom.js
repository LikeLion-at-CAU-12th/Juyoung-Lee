import {atom} from "recoil";

//로그인상태 여부 atom
export const isLoginAtom = atom({
    key: 'isLogin',
    default: false,
}); 