//반복되는 함수를 처리하기 위한 커스텀훅
//input이 많은 함수라서 ! 노가다 대신~ 커스텀훅

import {useState} from "react";

export const useForm = () =>{
    const [value, setValue] = useState();
    const onChange=(e)=>{
        setValue(e.target.value);
    };
    return [value, onChange];
}
