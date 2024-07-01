import { createContext } from "react";
import { theme } from "../theme/theme";

//기본색 초기값은 Theme.js에서 설정함.(context객체의 초기값)
export const ThemeColorContext = createContext(theme) ;
//테마컬러 컨텍스트의 초기값 설정은 Theme.js에서 설정하고 ()사이에 가져옴. 내보내기도 해야하니까 앞에 export
//상태를 담는 context . 상태전달 provider은 layout참고