import React, { useState, useEffect } from 'react'; // 리액트를 사용하려면 반드시 React를 선언해야합니다.
import logo from './logo.svg';
import './App.css';
/**  lesson 1. */
// 리액트 사용시 주의점.
// 모든 태그는 반드시  /> 닫혀있어야합니다. 안닫히면 에러 나요~
// 리액트는 태그에 감싸져 있어야합니다. ex) App_error function은 error임. 반드시 외투를 하나의 태그로 전체가 감싸져야함.
// div 말고 <> </> 로 감싸는 방법도 존재 함.  Fragment

// function App_error () {
//   return(
//     <div dclassName="App">
//       ddd
//     </div>
//     <div dclassName="App">
//     ddd
//   </div>
//   )
// }

// const App = () => {


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }
// TODO : app.js 를 error 내보기. /> 빼거나 <> </> 전체를 감싸지 않거나. 에러 확인 필수.


/**
 * lesson 2. js 사용하기.
 */

 const App = () => {

  /* useState 란?
  react가 hooks 로 넘어오면서 가장 기본적인 사용 함수.
  이 컴포넌트 내에서 변수의 상태를 관리할떄 사용 되는 기본 적인 함수.
  
  useState 사용 되는 문법 : 배열 비구조화 할당 문법 - ( 요건 추후에 설명 드릴게요~~)
  기본적으로 setValue 호출시 value 값을 변경한다고 생각 하시면 됩니다.
  
  useState(기본값) : useState(0), useSate(""), useState(false), useState({});
  와 같이 초기값 설정시 최초 값이 undefinde (할당 된 값 없음)이 아닌 초기에 지닌 값을 설정 할 수 있음.
  (초기값 설정시 화면 새로고침할때마다 초기값으로 셋팅이 되게 됨.)


  */
   const [value, setValue] = useState(0);


   // 벨류값 변경을 위한 버튼 이벤트 함수
  onchange = () => {
    setValue(value + 1);
  } 

   return (
     <div className="App">
       <div>
         {value}
       </div>
       <button onClick={onchange}>벨류값 변경하기.</button>

     </div>
   )
 }

 //TODO: 버튼을 이용하여 값 +- 할 수있게 제작. 0 이 되면 - 버트는 disabled.




export default App;
