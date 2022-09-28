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
      currStep:0,
      maxValue:100
    }
  }
    increment=(step)=>{
      this.setState(prevState=>{
        return {
          value:((prevState.value+step<=prevState.maxValue)?(prevState.value+step):(prevState.value))
        }
      })
    }
  
    decrement=(step)=>{
      this.setState(prevState=>{
        return {
          value:((prevState.value-step>=0)?(prevState.value-step):(prevState.value))

        }
      })
    }
    clickHandler=(e)=>{
      let rangeClicked=Number(e.target.innerText);
      this.setState(prevState=>{
        return {
          currStep:rangeClicked
        }
      })
  }
render(){
  return(
    <div className="container">
      <Ranges clickHandler={this.clickHandler} ranges={this.state.ranges}/>
      <Counter step={this.state.currStep} increment={this.increment} decrement={this.decrement} initialValue={this.state.value}/>
    </div>
  )
}
}
