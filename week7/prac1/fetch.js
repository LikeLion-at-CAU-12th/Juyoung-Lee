const url = './data/data.json' ;
const container = document.getElementById('container'); //아래서 만든 돔 요소를 html의 돔 요소로 넣기 위해서 작성


//모든 데이터를 불러오는 함수 정의
const fetchData =()=>{
    //자식요소가 이미 잇으면 없애기
    while(container.firstChild) {
        container.removeChild(container.firstChild); 
    }
    fetch(url)   //하면 url가져와짐
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        console.log(response.frontend); //.fontend로 원하는 배열만 출력되게함
        const datas = response.frontend ;

        datas.map((data)=>{ //각 순환되는 데이터는배열의 하나하나의 요소를 가리킴
            const list = document.createElement('div'); //리스트의 돔을 각 데이터로 만들거임///문자열 안에 데이터 넣기 백틱 ~ `` 변수는 ${}

            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다.` ;

            container.appendChild(list); //자식요소로 넣기 위해
            console.log(data);
        }) //이렇게 만든 돔 요소는 html의 컨테이너 자식으로 넣기 
    })
}