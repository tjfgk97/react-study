import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderHook } from '@testing-library/react';

const App = () => {

  //    [state 데이터, state 데이터 변경 함수]
  let [글제목, 글제목변경] = useState(['여자 코트 추천', '아동 코트 추천', '어른 코트 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기() {
    var newArray = [...글제목]; //deep copy 방법(...)
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

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
            <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{글제목[i]}
              <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}> 👍🏻</span> {따봉[i]} &nbsp;
              <button onClick={(e) => {
                e.stopPropagation();
                let remove = [...글제목];
                remove.splice(i, 1);
                글제목변경(remove);
              }}>글삭제</button> </h4>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        })
      }

      <input onChange={(e) => {
        {/*state 변경함수는 늦게 처리된다.*/ }
        입력값변경(e.target.value); {/*<- 이 줄이 완료되기 전에*/ }
        console.log(입력값); {/*<-이 줄을 실행해준다.*/ }
      }} /> {/* on어쩌구 = 이벤트핸들러 */}

      <button onClick={(e) => {
        e.stopPropagation();
        let copy = [...글제목];
        copy.unshift(입력값);

        let likes = [...따봉];
        likes.unshift(0);

        글제목변경(copy);
        따봉변경(likes);

      }} >글쓰기</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
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
      <button onClick={() => {

        let newTitle = [...props.글제목];
        newTitle[0] = '남자 코트 추천';
        props.글제목변경(newTitle)
      }}>글수정</button>
    </div>
  )
};

export default App;
