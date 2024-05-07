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
  }; //여러변수 쉽게 처리 위해 파라미터 값 입력하기

  //index에서 선택된 데이터의 추가 정보 가져오기
  const adddata = location.href.split('?')[1];
 // console.log(decodeURI(adddata));


  //add.html구성하기
  async function getadd() {
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${random}&serviceKey=${option.serviceKey}`;
    //파라미터도 불러오기

    const fetchaddData = await fetch(url);
    //console.log(fetchaddData);

    const toaddJson = await fetchaddData.json();
    //console.log(toaddJson);

    const adddatas = await toaddJson.response.body.items.item; //원하는 배열만 불러오기
    //console.log(adddatas);
    //연결지으며 데이터 불러옴

    
    //Dom요소 만들기
    const addbox = document.createElement('div');
    addbox.id = "addbox";

    
    const location = document.createElement('span');
    location.innerText = ` 
    제목 : ${data.galTitle}
    장소 : ${data.galPhotographyLocation}`;

    const image = document.createElement('img'); 
    image.src = adddata.galWebImageUrl;

    const date = document.createElement('span');
    date.innerText = `촬영날짜 : ${adddata.galCreatedtime}`

    const photographer = document.createElement('span');
    photographer.innerText = `촬영자 : ${adddata.galPhotographer}`;

    const photokeyword = document.createElement('span');
    photokeyword.innerText = `#키워드 모음# ${adddata.galSearchkeyword}`;

    addbox.appendChild(location);
    addbox.appendChild(image);
    addbox.appendChild(date);
    addbox.appendChild(photographer);
    addbox.appendChild(photokeyword);

    addContainer.appendChild(addbox); //위의 것들을 컨테이너에 넣기 



  }
