import React from 'react';
import Ranges from './components/Ranges'
import './App.css';
import Counter from './components/Counter';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:0,
      ranges:[5,15,25,50,75,100]
    }
  }
    increment=()=>{
      this.setState(prevState=>{
        return {
          value:prevState.value+1
        }
      })
    }
  
    decrement=()=>{
      this.setState(prevState=>{
        return {
          value:prevState.value-1
        }
      })
    }
render(){
  return(
    <div className="container">
      <Ranges ranges={this.state.ranges}/>
      <Counter increment={this.increment} decrement={this.decrement} initialValue={this.state.value}/>
    </div>
  )
}
}
