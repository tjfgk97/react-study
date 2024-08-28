import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderHook } from '@testing-library/react';

const App = () => {

  //    [state 데이터, state 데이터 변경 함수]
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '아동 코트 추천', '어른 코트 추천']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  // Array, Object state 데이터 수정방법 -> 변경함수를 사용해야 한다./ - 변경함수(대체할 데이터)
  // state는 건들지 말 것. deep copy 해서 그걸 건들도록.

  function 제목바꾸기() {
    // var newArray = 글제목; 이건 복사가 아니라 값을 공유하는 것이다. reference data type 검색.
    var newArray = [...글제목]; //deep copy 방법(...)
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

    // 1. 기존 state 카피본 만들고
    // 2. 카피본에 수정사항 반영하고
    // 3. 변경함수()에 집어넣기.

  };

  function 순서바꾸기() {
    var newOrder = [...글제목];
    newOrder.sort();
    글제목변경(newOrder);
  };

  return (                      //html처럼 생긴 jsx 문법
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={순서바꾸기}>글정렬</button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍🏻</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
        <hr />
      </div> */}

      {
        글제목.map(function (a, i) {
          return <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}</h4>
              <span onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}> 👍🏻</span> {따봉[i]} 
            <p>2월 18일 발행</p>
            <hr />
          </div>

          // map() 함수
          // 1. 왼쪽 array 자료만큼 내부 코드 실행해줌
          // 2. return 오른쪽에 있는 걸 array로 담아줌
          // 3. 유용한 파라미터 2개 사용 가능
        })
      }

      <button onClick={ ()=> { setTitle(0) }}>글제목0</button>
      <button onClick={ ()=> { setTitle(1) }}>글제목1</button>
      <button onClick={ ()=> { setTitle(2) }}>글제목2</button>

      {/* <div className="list">
        <h4 onClick={()=> { modal == true ? setModal(false) : setModal(true)}}>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
        <hr />
      </div> */}

      {
        // 조건식을 사용하고자 할 때는 아래처럼 삼항 연산자를 이용할 것.
        // 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드

        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null

        // [동적인 UI 만드는 step]
        // 1. html css로 미리 디자인 완성
        // 2. UI의 현재 상태를 state로 저장
        // 3. state에 따라 UI가 어떻게 보일지 작성

        // 부모 -> 자식 state 전송하려면 props 문법 사용
        // 1. <자식 컴포넌트 작명 = {state이름}>
        // 2. props 파라미터 등록 후 props.작명 사용
      }
    </div>
  );
};

function Modal(props, i) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => { 
        
        let newTitle = [...props.글제목];
        newTitle[0] = '남자 코트 추천';
        props.글제목변경(newTitle) 
        } }>글수정</button>
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
