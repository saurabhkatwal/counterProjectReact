import React from 'react';
import Ranges from './components/Ranges'
import './App.css';
import Counter from './components/Counter';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:0,
      ranges:[5,15,25,50,75,100],
      currStep:5
    }
  }
    increment=(step)=>{
      this.setState(prevState=>{
        return {
          value:prevState.value+step
        }
      })
    }
  
    decrement=(step)=>{
      this.setState(prevState=>{
        return {
          value:prevState.value-step
        }
      })
    }
render(){
  return(
    <div className="container">
      <Ranges ranges={this.state.ranges}/>
      <Counter step={this.state.currStep} increment={this.increment} decrement={this.decrement} initialValue={this.state.value}/>
    </div>
  )
}
}
