/*
import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 }, // id값은 배열의 index값을 사용하면 안됨
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Eating", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement : ${habit.name}`);
    // habit.count++;  // 리엑트에서 State를 직접수정하면 안된다. (동작은 가능)
    // this.setState(this.state);

    const habits = [...this.state.habits];  // 배열복사(Spread Syntax)
    const index = habits.indexOf(habit);
    habits[index].count++;  // 원본배열(state의 habits)의 원소값을 업데이트 하는것과 같음(참조값), 추가로 state값 직접 변경은 안좋은 방식

    // this.setState({habits : habits});  // key: state의 habits,  value: 로컬변수 habits,  
    this.setState({habits}); // key,value 이름이 같으면 생략가능
  };

  handleDecrement = (habit) => {
    console.log(`handleIncrement : ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count -1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  };
  
  handleDelete = (habit) => {

    console.log(`handleIncrement : ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !==habit.id);
    this.setState({habits});
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> //habit prop에 habit값 및 콜백함수 전달
        ))}
      </ul>
    );
  }
}
export default Habits;
*/