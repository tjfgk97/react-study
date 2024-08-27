import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  //    [state 데이터, state 데이터 변경 함수]
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '아동 코트 추천', '어른 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

// Array, Object state 데이터 수정방법 -> 변경함수를 사용해야 한다./ - 변경함수(대체할 데이터)
// state는 건들지 말 것. deep copy 해서 그걸 건들도록.

  function 제목바꾸기(){
    // var newArray = 글제목; 이건 복사가 아니라 값을 공유하는 것이다. reference data type 검색.
    var newArray = [...글제목]; //deep copy 방법(...)
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

    // 1. 기존 state 카피본 만들고
    // 2. 카피본에 수정사항 반영하고
    // 3. 변경함수()에 집어넣기.

  };

  function 순서바꾸기(){
    var newOrder = [...글제목];
    newOrder.sort();
    글제목변경(newOrder);
  };

  return (                      //html처럼 생긴 jsx 문법
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

    <button onClick={ 순서바꾸기 }>버튼</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍🏻</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
        <hr />
      </div>
    </div>
  );
};


export default App;
