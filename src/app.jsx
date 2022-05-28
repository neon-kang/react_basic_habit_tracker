import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  
  // 기존 : habits의 habit을 복사해서 만듬
  // handleIncrement = habit => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   habits[index].count++;
  //   this.setState({ habit });
  // };

  // 변경 : habit의 각 요소들을 복사해서 만듬 (PureComponent 에서도 변경을 인지할 수 있도록 Habit 객체를 새로 생성해서 전달, reference값을 변경)
  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  // 기존 : habits의 habit을 복사해서 만듬
  // handleDecrement = habit => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   const count = habits[index].count - 1;
  //   habits[index].count = count < 0 ? 0 : count;
  //   this.setState({ habit });
  // };

  // 변경 : habit의 각 요소들을 복사해서 만듬 (PureComponent 에서도 변경을 인지할 수 있도록 Habit 객체를 새로 생성해서 전달, reference값을 변경)
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };


  // 기존 : habits의 habit의 상태를 변경
  // handleReset = () => {
  //   const habits = this.state.habits.map(habit => {
  //     habit.count = 0;
  //     return habit;
  //   });
  //   this.setState({ habits });
  // };

  // 변경 : habit의 각 요소들을 복사해서 상태변경 (PureComponent 에서도 변경을 인지할 수 있도록 Habit 객체를 새로 생성해서 전달)
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("render : App")
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

/*
function App() {

  return <Habits/>

  // return <Habit/>

  // const name = 'swkang';
  // return (
  //   <React.Fragment>
  //     <h1>Hello! {name} </h1>
  //     <h1>Hi! {name} </h1>
  //     {['🍕', '🍔'].map(item =>(
  //       <h1>{item}</h1>
  //     ))}
  //   </React.Fragment>
  // );

  // return React.createElement('h1',{}, 'Hello!!');  //과거 JSX 미지원시 함수로 코딩
}
*/

export default App;
