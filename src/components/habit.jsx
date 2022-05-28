import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  
  // state = {
  //   count: 0,
  // }

  // handleIncrement = event => {
  //   console.log(event);
  // }

  // handleIncrement = () => {
  //   // this.state.count +=1;  // react에서 값이 변경된지 알수 없어서 render함수 호출안됨
  //   this.setState({count: this.state.count +1})  // 전체 데이터 갱신필요
  // }
  // handleDecrement = () => {
  //   const minusCount = this.state.count -1;
  //   this.setState({count: minusCount< 0 ? 0 : minusCount})  // 전체 데이터 갱신필요
  // }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }
  
  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {

    console.log(`render : Habit(${this.props.habit.name})`)

    const {name, count} = this.props.habit;  // Object destructuring (param 명이 같아야 함)
    // console.log("name = ",name);
    // console.log("count = ",count);

    return (
      <li className='habit'>
        
        {/* <span className='habit-name'>Reading</span>
        <span className='habit-count'>{this.state.count}</span> */}

        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>

        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;    