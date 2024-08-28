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
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}
              <span onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}> 👍🏻</span> {따봉[i]} </h4>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        })
      }

    <input onChange={ ()=>{  }}></input>
    
      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
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
  )
};

export default App;
