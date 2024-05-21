const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1" ; //사용할 API연결하기

const addContainer = document.getElementById('addContainer'); //addcontainer라는 변수에 id값 가진 해당 태크 넣기

const option = {
    serviceKey:
      "TogHgCDgb%2BhASs0zbfHFOaYSuUCCnQUQvf6bw9RuyPMAcdkszbHZXnoILHrcXL3qIY9uuNtLrgV9LsgBay8O9g%3D%3D", //내 인증키 마이페이지에서 복사해오기
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo : 1
  }; 

  //index에서 선택된 데이터의 추가 정보 가져오기
 // const adddata = location.href.split('?')[1];
 // console.log(decodeURI(adddata));

//location.search 안에 존재하는 키-값으로 파라미터 가져오기
const urlParams = new URLSearchParams(window.location.search);

getadd();

  //add.html구성하기
async function getadd() {
 // const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&serviceKey=${option.serviceKey}`;
    //파라미터도 불러오기 /는 필요없어서 주석처리함.
    
    //urlParams의 데이터를 각 변수로 저장하기
    const title = urlParams.get("title"); //값인 %{data.galTitle}이 불러와짐 ..
    const image = urlParams.get('image');
    const loca = urlParams.get("loca");
    const photoG = urlParams.get("photoG");
    const keyword= urlParams.get("keyword");

    //date 보기좋게 바꾸기
    const date = urlParams.get("date");
    const year = date.substring(0,4);
    const month = date.substring(4,6);
    const day = date.substring(6,8);


    //Dom요소 만들기
    const addbox = document.createElement('div');
    addbox.id = "addbox";

    const addtitle = document.createElement('span');
    addtitle.innerText = `${title}`;
    //index.js에서 아예 데이터를 보냇기에 이렇게 작성해봄

    const addloca = document.createElement('span');
    addloca.innerText = `장소 : ${loca}`;

    const addimage = document.createElement('img'); 
    addimage.src = image;

    const adddate = document.createElement('span'); 
    adddate.innerText = `촬영날짜 : ${year} / ${month} / ${day}`

    const addphotoG = document.createElement('span');
    addphotoG.innerText = `촬영자 : ${photoG}`;

    const addkeyword = document.createElement('span');
    addkeyword.innerText = `#키워드 모음# ${keyword}`;

    addbox.appendChild(addtitle);
    addbox.appendChild(addloca);
    addbox.appendChild(addimage);
    addbox.appendChild(adddate);
    addbox.appendChild(addphotoG);
    addbox.appendChild(addkeyword);

    addContainer.appendChild(addbox); //위의 것들을 컨테이너에 넣기 

  };

