import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';


class Habits extends Component {

  handleAdd = name => {
    this.props.onAdd(name);
  };

  
  render() {
    console.log("render : Habits")
    return (
      <div className="habits">

        {/* HabitAddForm을 App 밑에 배치하는것도 좋음 */}
        <HabitAddForm onAdd={this.props.onAdd} />  
        {/* <HabitAddForm onAdd={this.handleAdd} /> */}

        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              // onDelete={(habit) => {this.props.handleDelete(habit)}}   // 메모리에서 함수가 계속 생성되어서 비 효율적
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
