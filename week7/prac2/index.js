//베이스 url선언 -뒤만 수정
const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1" ;
//컨테이너에 자식요소로 넣을거기에 컨테이너돔 가져와
const container = document.getElementById('container');


const option = {
    serviceKey:
      "TogHgCDgb%2BhASs0zbfHFOaYSuUCCnQUQvf6bw9RuyPMAcdkszbHZXnoILHrcXL3qIY9uuNtLrgV9LsgBay8O9g%3D%3D", //내 인증키 마이페이지에서 복사해오기
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo : 1
  }; //밑에 매번 할당 귀찮아서 변수로 처리함
  

  let count = -1; //const는 상수 같은거 count는 계속 바뀔거라 let
//함수 만들거임 어싱크 어웨이트 사용
async function getData() { //asyne 이 함수는 비동기적인 함수고 promise를 반환한다.
    count++ ; //위에서 카운트 설정했으니까 
    const random = Math.floor(Math.random()*100 +1);  //페이지 내 랜덤하게
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${random}&serviceKey=${option.serviceKey}`;
    //파라미터도 불러와야해

    //패치랑 댄 안해도 ㅇㅋ
    const fetchData = await fetch(url);
    // console.log(fetchData);

    const toJson = await fetchData.json();
    // console.log(toJson);

    const datas = await toJson.response.body.items.item; //원하는 배열만 불러오기
    console.log(datas);

    //map으로 순환한 뒤 데이터 순회
    datas.map((data, i)=>{  //반복될때마다 i가 계속해 증가

        //Dom요소 만들기
        const list = document.createElement('div');
        list.id = "list";

        const image = document.createElement('img'); //img 태그 
        image.src = data.galWebImageUrl;  //각 이미지 넣어주는 속성 이미지 링크로 가져와/ 키값 찾아서 키 넣기

        const info = document.createElement('span');
        info.innerText = `
        ${i+1 + 5 * count}번째 
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}`;
        

        const button = document.createElement('button');
        button.innerText = "더보기" ;

        //버튼 클릭시 add페이지로 이동
        button.addEventListener("click", () => {
          location.href = `./add.html?title=${data.galTitle}&loca=${data.galPhotographyLocation}&image=${data.galWebImageUrl}&date=${data.galCreatedtime}&photoG=${data.galPhotographer}&keyword=${data.galSearchKeyword}`;
        })
        

        //리스트라는 디브 태그 안에 넣을 요소들 다 만들었음

        //이제 넣으면 되겟지 listChild 이용해서
        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(button);

        container.appendChild(list); //위의 것들을 컨테이너에 넣기 


    })

}

//구성:각 하나가 리스트 그 안에 이미지 태그, 태그 넣기
//그리드 모양 위해 css파일로 가자격자 

