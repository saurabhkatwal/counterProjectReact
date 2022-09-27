import React from 'react';
import Ranges from './components/Ranges'
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      value:0,
      ranges:[5,15,25,50,75,100]
    }
  }
render(){
  return(
    <div className="container">
      <Ranges ranges={this.state.ranges}/>
      <Counter/>
    </div>
  )
}
}
