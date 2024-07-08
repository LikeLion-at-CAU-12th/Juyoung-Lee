import {atom } from "recoil";

export const userNameAtom = atom({
    key: 'userName',
    default: "멋쟁이 사자",
});

export const emailAtom = atom({
    key: 'email',
    default: "likelion@cau.ac.kr",
});

export const isSubmitedAtom = atom({
    key: 'isSubmited',
    default: false,
});

export const telAtom = atom ({
    key: 'tel',
    default : "010-1234-5678",
}) ;
