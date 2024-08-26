import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  let [글제목, 글제목변경] = useState('남자 코트 추천');

  let posts = '강남 고기 맛집';
  return (                      //html처럼 생긴 jsx 문법
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
};


export default App;
