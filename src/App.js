import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderHook } from '@testing-library/react';

const App = () => {

  //    [state 데이터, state 데이터 변경 함수]
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '아동 코트 추천', '어른 코트 추천']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, setModal] = useState(false);

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

    <button onClick={ 순서바꾸기 }>글정렬</button>

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

    {
      // 조건식을 사용하고자 할 때는 아래처럼 삼항 연산자를 이용할 것.
      // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드

      modal == true ? <Modal /> : null
    }

    </div>
  );
};

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

    // Component 만드는 법
    // 1. 함수 만들고 이름 짓고
    // 2. 축약을 원하는 HTML 넣고
    // 3. 원하는 곳에서 <함수명 />

    // Component 유의사항
    // 1. 이름은 대문자로 시작
    // 2. return() 안에 있는 건 태그 하나로 묶어야 한다.
    // 3. function App() 밖에 만들 것.

    // 어떤 걸 Component로 만드느냐
    // - 반복해서 나오는 HTML 덩어리들
    // - 자주 변경되는 HTML UI들
    // - 다른 페이지 만들 때도 컴포넌트로 만듦

    // Component 많이 만들 경우 단점
    // - state 쓸 때 복잡해짐
    // (상위 Component에서 만든 state 쓰렴련 props 문법 이용해야 한다.)
  )
};

export default App;
