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
const data = new URLSearchParams(window.location.search);
getadd();

  //add.html구성하기
async function getadd() {
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&serviceKey=${option.serviceKey}`;
    //파라미터도 불러오기


    //Dom요소 만들기
    const addbox = document.createElement('div');
    addbox.id = "addbox";

    //const addtitle = urlParams.get('title');

    //const addtitle = document.createElement('span');
    const addtitle = document.querySelector('title');
    addtitle.innerText = `${data.galTitle}`;
    //index.js에서 아예 데이터를 보냇기에 이렇게 작성해봄

    const loca = document.createElement('span');
    loca.innerText = `장소 : ${data.galPhotographyLocation}`;

    const image = document.createElement('img'); 
    image.src = data.galWebImageUrl;

    const date = document.createElement('span'); 
    date.innerText = `촬영날짜 : ${data.galCreatedtime}`

    const photoG = document.createElement('span');
    photoG.innerText = `촬영자 : ${data.galPhotographer}`;

    const keyword = document.createElement('span');
    keyword.innerText = `#키워드 모음# ${data.galSearchkeyword}`;

    addbox.appendChild(addtitle);
    addbox.appendChild(loca);
    addbox.appendChild(image);
    addbox.appendChild(date);
    addbox.appendChild(photoG);
    addbox.appendChild(keyword);

    addContainer.appendChild(addbox); //위의 것들을 컨테이너에 넣기 

  };

