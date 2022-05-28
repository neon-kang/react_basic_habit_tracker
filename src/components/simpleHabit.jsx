import React, { useCallback, useEffect, useRef, useState } from 'react';

// 컴포넌트 갱신시 코드블럭 전체가 재 수행
const SimpleHabit = (props) => {

  const[count, setCount] = useState(0);  // useState() -> state값 유지
  const spanRef = useRef();  // useRef() -> ref값 유지(매번 새값을 할당하지 않게 해줌)

  const handleIncrement = useCallback(() => {  // useCallBack() -> function 참조값을 유지
    setCount(count + 1);
  });

  // useEffect(() => {
  //   console.log(`mounted & updated!: ${count}`)
  // })    // mounted 될때와 state와 props 변경될때 마다 호출

  // useEffect(() => {
  //   console.log(`mounted!: ${count}`)
  // },[])  // mounted 될때만 호출

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`)
  },[count])   // mounted될때와 count값 변경시에만 호출


  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );

};     

export default SimpleHabit;
